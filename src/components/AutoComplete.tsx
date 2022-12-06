import React, { useEffect, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, map, switchMap, tap, filter } from "rxjs/operators";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Stop } from "../types";
import constants from "../constants";

type AutoCompleteProps = {
  style: string;
  placeholder: string;
  value: Stop | null;
  name: string;
  valueChangeHandler: (value: Stop) => void;
};

const getApiUrl = (value: string) => {
  return `${constants.api_server}/locations?poi=false&addresses=false&query=${value}`;
};

const transformResponse = ({ response }: AjaxResponse<any>): Stop[] => {
  return response.map(
    (item: { [x: string]: any }): Stop => ({
      id: item["id"],
      name: item["name"],
    })
  );
};

const AutoComplete = ({
  style,
  placeholder,
  value,
  valueChangeHandler,
  name,
}: AutoCompleteProps) => {
  const [activeOption, setActiveOption] = useState<Stop | null>(null);
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState<Stop[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState(value ? value.name : '');
  const [dataChangeSubject, setDataChangeSubject] = useState(
    new Subject<string>()
  );

  useEffect(() => {
    const subscription = dataChangeSubject
      .pipe(
        debounceTime(300),
        //tap((s) => console.log(`In Pipe ${s}`)),
        filter((s) => s.length > 2),
        map(getApiUrl),
        switchMap((url) => ajax(url)),
        map(transformResponse)
      )
      .subscribe(
        (locations) => {
          setFilteredOptions(locations);
          setShowOptions(true);
        },
        (error) => {
          console.error(error);
        }
      );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setUserInput(userInput);
    dataChangeSubject.next(userInput);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActiveOptionIndex(0);
    setFilteredOptions([]);
    setShowOptions(false);
    setUserInput(e.currentTarget.innerText);

    valueChangeHandler(filteredOptions[activeOptionIndex]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setActiveOptionIndex(0);
      setShowOptions(false);
      setUserInput(filteredOptions[activeOptionIndex].name);
      setActiveOption(filteredOptions[activeOptionIndex]);
    } else if (e.key === "keyup") {
      if (activeOptionIndex === 0) {
        return;
      }
      setActiveOptionIndex(activeOptionIndex - 1);
    } else if (e.key === "keydown") {
      if (activeOptionIndex === filteredOptions.length - 1) {
        return;
      }
      setActiveOptionIndex(activeOptionIndex + 1);
    } else if (e.key === "Escape") {
      setUserInput("");
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
                onClick={onClick}
              >
                {option.name}
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
