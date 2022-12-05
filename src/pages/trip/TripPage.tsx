import React from "react";
import { useAppSelector } from "../../store/hooks";
import { JourneyItem } from "./components/JourneyItem";

export const TripPage = () => {
  const journey = useAppSelector((state) => state.journey);

  return (
    <>
      {journey.loading && <div>Loading...</div>}
      {!journey.loading && journey.error ? (
        <div>Error: {journey.error}</div>
      ) : null}
      {!journey.loading && journey.journeys.length ? (
        <>
          {journey.journeys.map((journey, index) => (
            <div key={index}>
            <JourneyItem journey={journey} index={index} />
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};
