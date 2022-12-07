import React from "react";
import Moment from "moment";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
export const JourneyHeader = () => {
  const navigate = useNavigate();
  const journey = useAppSelector((state) => state.journey);

  const onClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-2 my-3">
        <div className="card w-full md:w-3/4 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row">
              <div className="my-1 flex flex-row items-center">
                <span>
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
                <h3 className="flex pl-1 pr-5 items-center text-lg font-semibold text-gray-900 dark:text-white">
                  {journey.criteria?.from?.name}
                </h3>
              </div>

              <div className="my-1 flex flex-row items-center">
                <span>
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
                <h3 className="flex pl-1 pr-5 items-center text-lg font-semibold text-gray-900 dark:text-white">
                  {journey.criteria?.to?.name}
                </h3>
              </div>

              <div className="my-1 flex flex-row items-center">
                <span>
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0 2.01A5.979 5.979 0 0 0 4.01 10 5.979 5.979 0 0 0 10 15.99 5.979 5.979 0 0 0 15.99 10 5.979 5.979 0 0 0 10 4.01zM10.995 6v3.59l2.186 2.186-1.405 1.405-2.771-2.771V6h1.99z"
                      fill="#131821"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
                <h3 className="flex pl-1 pr-5 items-center text-lg font-semibold text-gray-900 dark:text-white">
                  DEP: {Moment(journey.criteria?.departure).format("HH:mm")}
                </h3>
              </div>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className={`btn btn-primary text-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                onClick={onClick}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-4 items-center justify-center ">
        <div className="w-full md:w-3/4">
          <h3 className="font-semibold">
            Outward journey on{" "}
            {Moment(journey.criteria?.departure).format("DD/MM/YYYY")}
          </h3>
        </div>
      </div>
    </>
  );
};
