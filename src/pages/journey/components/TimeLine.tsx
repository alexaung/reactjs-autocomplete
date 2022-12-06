import React from "react";
import Moment from "moment";
import { Leg } from "../../../types";

type TImeLineProps = {
  leg: Leg;
};
export const TimeLine = ({ leg }: TImeLineProps) => {
  return (
    <ol key={leg.tripId} className="relative border-l border-gray-200 dark:border-gray-700">
      {leg.line ? (
        <>
          <li key={leg.origin.id} className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <time className="absolute -left-20 mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              {Moment(leg.plannedDeparture).format("HH:mm")}
            </time>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {leg.origin.name}
            </h3>
            {leg.line && (
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {leg.line.name}
              </p>
            )}

            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              &rarr; {leg.direction}
            </p>
          </li>

          <li key={leg.destination.id} className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <time className="absolute -left-20 mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              {Moment(leg.plannedArrival).format("HH:mm")}
            </time>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {leg.destination.name}
            </h3>
          </li>
        </>
      ) : (
        // <li className="mb-1 ml-6">
        //   <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        //     Adjust the transfer time
        //   </p>
        // </li>
        <></>
      )}
    </ol>
  );
};
