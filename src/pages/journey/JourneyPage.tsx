import React from "react";
import { useAppSelector } from "../../store/hooks";
import { JourneyItem } from "./components/JourneyItem";
import { Error } from "../../components/Error";
import { JourneyHeader } from "./components/JourneyHeader";

export const JourneyPage = () => {
  const journey = useAppSelector((state) => state.journey);

  return (
    <>
      {journey.loading && <div>Loading...</div>}
      {!journey.loading && journey.error ? (
        <Error message={journey.error} />
      ) : null}
      {!journey.loading && journey.journeys.length ? (
        <>
          <JourneyHeader />
          {journey.journeys.map((journey, index) => (
            <JourneyItem
              key={`journey-${index}`}
              journey={journey}
              index={index}
            />
          ))}
        </>
      ) : (
        <>
          {!journey.error && journey.journeys.length === 0 ? (
            <Error message="No Record Found" />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
