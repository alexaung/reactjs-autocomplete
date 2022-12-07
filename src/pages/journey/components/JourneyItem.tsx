import React, { useState } from "react";
import Moment from "moment";
import { Journey } from "../../../types";
import { ProgressLine } from "./ProgressLine";
import { TimeLine } from "./TimeLine";

type JourneyProps = {
  journey: Journey;
  index: number;
};

export const JourneyItem = ({ journey, index }: JourneyProps) => {
  const [show, setShow] = useState(false);

  const showDetial = () => {
    setShow(!show);
  };

  return (
    <div className="flex items-center justify-center mx-2 my-3">
      <div className="card w-full md:w-3/4 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 md:pr-5">
              <h3 className="font-semibold">
                {Moment(journey.legs[0].plannedDeparture).format("HH:mm")} -{" "}
                {Moment(
                  journey.legs[journey.legs.length - 1].plannedArrival
                ).format("HH:mm")}
              </h3>
              <div className="w-full flex flex-wrap justify-between">
                {journey.legs.map((leg, index) => (
                  <ProgressLine
                    key={`progress-${index}`}
                    journey={journey}
                    leg={leg}
                    index={index}
                  />
                ))}
              </div>
              <div className="w-full flex flex-row justify-between pt-2">
                <div>{journey.legs[0].origin.name}</div>
                <div>
                  {journey.legs[journey.legs.length - 1].destination.name}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-end md:justify-center items-center pt-2 mt-2 border-t lg:border-t-0 md:border-l">
              <div>
                {journey.price ? (
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {journey.price.currency} {journey.price.amount}
                  </h3>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <a className="link" onClick={showDetial}>
                {show ? <span>Hide details</span> : <span>Show details</span>}
              </a>
            </div>
          </div>
          <>
            {show ? (
              <>
                <div className="divider"></div>
                <div className="px-20 lg:order-3 lg:mt-0">
                  {journey.legs.map((leg, index) => (
                    <TimeLine key={`timeline-${index}`} leg={leg} />
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        </div>
      </div>
    </div>
  );
};
