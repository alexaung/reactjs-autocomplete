import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../routes/routes";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};
