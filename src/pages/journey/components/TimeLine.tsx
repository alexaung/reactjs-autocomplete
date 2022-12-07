import React from "react";
import Moment from "moment";
import { Leg } from "../../../types";

type TImeLineProps = {
  leg: Leg;
};
export const TimeLine = ({ leg }: TImeLineProps) => {
  return (
    <ol
      key={leg.tripId}
      className="relative border-l border-gray-200 dark:border-gray-700"
    >
      {leg.line ? (
        <>
          <li key={leg.origin.id} className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter colorInterpolationFilters="auto" id="a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.074510 0 0 0 0 0.094118 0 0 0 0 0.129412 0 0 0 1.000000 0"
                    />
                  </filter>
                </defs>
                <g filter="url(#a)" fill="none" fillRule="evenodd">
                  <path
                    d="M10 3.5c3.594 0 6.5 2.906 6.5 6.5s-2.906 6.5-6.5 6.5A6.495 6.495 0 0 1 3.5 10c0-3.594 2.906-6.5 6.5-6.5zm0 2c-2.469 0-4.5 2.031-4.5 4.5s2.031 4.5 4.5 4.5 4.5-2.031 4.5-4.5-2.031-4.5-4.5-4.5zm0 6.5c1.125 0 2-.875 2-2s-.875-2-2-2-2 .875-2 2 .875 2 2 2z"
                    fill="#131821"
                  />
                </g>
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
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter colorInterpolationFilters="auto" id="a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 0.074510 0 0 0 0 0.094118 0 0 0 0 0.129412 0 0 0 1.000000 0"
                    />
                  </filter>
                </defs>
                <g filter="url(#a)" fill="none" fillRule="evenodd">
                  <path
                    d="M10 2c3.469 0 6 2.594 6 6 0 1.375-.594 2.906-1.75 4.563l-3.438 5A.942.942 0 0 1 10 18a.942.942 0 0 1-.813-.438l-3.437-5C4.594 10.876 4 9.376 4 8c0-3.313 2.438-6 6-6zm0 4c-1.094 0-2 .906-2 2 0 1.094.906 2 2 2 1.094 0 2-.906 2-2 0-1.094-.906-2-2-2z"
                    fill="#131821"
                  />
                </g>
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
