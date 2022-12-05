import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-300 grow">
      <div className="flex w-screen">
        <NavBar />
      </div>
      <div className="flex-grow">
        <AppRoutes />
      </div>
      <div className="flex w-screen">
        <Footer />
      </div>
    </div>
  );
}

export default App;
