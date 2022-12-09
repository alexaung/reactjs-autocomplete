import AutoComplete from "./AutoComplete";
import DatePicker from "react-datepicker";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SearchCriteria } from "../types";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchJourneys } from "../reducers/journeySlice";
import { useNavigate } from "react-router-dom";
import { Stop } from "../types";
import { useState } from "react";
import { getSuggestions } from "../services/location-suggestion-service";

const schema = Yup.object({
  from: Yup.object().nullable().required('From is required.'),
  to: Yup.object().nullable().required('To is required.'),
  departure: Yup.date().required("Date is required"),
});

interface FormData {
  from: Stop | null;
  to: Stop | null;
  departure: Date;
}

export const SearchForm = () => {
  const journey = useAppSelector((state) => state.journey);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: FormData = {
    from: journey.criteria ? journey.criteria.from : null,
    to: journey.criteria ? journey.criteria.to : null,
    departure: journey.criteria ? journey.criteria.departure : new Date(),
  };

  const handleSearch = async (criteria: SearchCriteria) => {
    
    setIsSubmitting(true);
    await dispatch(fetchJourneys(criteria));
    setIsSubmitting(false);
    navigate("/journey");
  };

  const renderSuggestion = (suggestion: Stop) => {
    return `${suggestion.name}`;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSearch}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                From
              </label>
              <AutoComplete
                style="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Station / stop / address"
                name="from"
                value={values.from}
                valueChangeHandler={(from: Stop) => setFieldValue("from", from)}
                getSuggestions={getSuggestions}
                renderSuggestion={renderSuggestion}
              />
              <ErrorMessage
                component="span"
                name="from"
                className=" text-xs text-red-400"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                To
              </label>
              <AutoComplete
                style="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Station / stop / address"
                name="to"
                value={values.to}
                valueChangeHandler={(to: Stop) => setFieldValue("to", to)}
                getSuggestions={getSuggestions}
                renderSuggestion={renderSuggestion}
              />
              <ErrorMessage
                component="span"
                name="to"
                className=" text-xs text-red-400"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Outbound journey
              </label>

              <DatePicker
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                selected={values.departure}
                onChange={(date) => setFieldValue("departure", date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                name="departure"
              />
              <ErrorMessage
                component="span"
                name="departure"
                className=" text-xs text-red-400"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary text-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                isSubmitting ? "loading" : ""
              }`}
            >
              {isSubmitting ? "Processing..." : "Search"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
