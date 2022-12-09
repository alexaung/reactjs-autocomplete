import React, { useEffect, useState } from "react";
import { Subject, Observable } from "rxjs";
import { Stop } from "../types";

type AutoCompleteProps<T> = {
  style: string;
  placeholder: string;
  value: T | null;
  name: string;
  valueChangeHandler: (value: T) => void;
  getSuggestions: <T>(subject: Subject<string>) => Observable<T[]>;
  renderSuggestion: (suggestion: T) => JSX.Element | string;
};

const AutoComplete = <T extends Stop>({
  style,
  placeholder,
  value,
  name,
  valueChangeHandler,
  getSuggestions,
  renderSuggestion,
}: AutoCompleteProps<T>) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState(value ? value.name : "");
  const [dataChangeSubject, setDataChangeSubject] = useState(
    new Subject<string>()
  );

  useEffect(() => {
    const subscription = getSuggestions<T>(dataChangeSubject).subscribe({
      next: (locations) => {
        setFilteredOptions(locations);
        setShowOptions(true);
      },
      error: (error) => {
        console.error(error);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setUserInput(userInput);
    dataChangeSubject.next(userInput);
  };

  const handleSelect = (idx: number) => {
    setActiveOptionIndex(idx);
    setFilteredOptions([]);
    setShowOptions(false);
    setUserInput(filteredOptions[idx].name);
    valueChangeHandler(filteredOptions[idx]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const UP = "keyup";
    const DOWN = "keydown";
    const ENTER = "Enter";
    const INITIAL_IDX = 0;

    if (e.key === DOWN) {
      e.preventDefault();
      const idx = activeOptionIndex;
      const nextIdx = idx !== undefined ? idx + 1 : INITIAL_IDX;

      if (nextIdx < filteredOptions.length) {
        setActiveOptionIndex(nextIdx);
      } else {
        setActiveOptionIndex(INITIAL_IDX);
      }
    }

    if (e.key === UP) {
      e.preventDefault();
      const lastIdx = filteredOptions.length - 1;
      const idx = activeOptionIndex;
      const prevIdx = idx !== undefined ? idx - 1 : lastIdx;

      if (prevIdx >= 0) {
        setActiveOptionIndex(prevIdx);
      } else {
        setActiveOptionIndex(lastIdx);
      }
    }

    if (e.key === ENTER && activeOptionIndex !== undefined) {
      handleSelect(activeOptionIndex);
    }
  };

  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="menu block list-none bg-base-100 w-auto rounded-box shadow-xl shadow-gray-500/5">
          {filteredOptions.map((option, index) => {
            return (
              <li
                className={`bg-gray-50 block my-1 p-2 rounded-sm hover:bg-gray-100 hover:font-bold hover:text-primary-focus hover:cursor-pointer hover:transition-all`}
                key={option.id}
                onClick={(e) => handleSelect(index)}
              >
                {renderSuggestion(option)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="block list-none bg-base-100 w-auto rounded-box shadow-xl shadow-gray-500/5">
          <em>No Option!</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder={`${placeholder}`}
        className={`${style}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        name={name}
        autoComplete="off"
      />
      {optionList}
    </>
  );
};

export default AutoComplete;
