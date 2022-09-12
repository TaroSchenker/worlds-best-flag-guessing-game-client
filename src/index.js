import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TimerProvider from "./context/TimerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TimerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TimerProvider>
);
