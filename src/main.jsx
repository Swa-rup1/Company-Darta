import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from './App';

import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./components/Router/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={"Company Darta "}>
      <RouterProvider router={MainRoute} />
    </Suspense>
  </React.StrictMode>
);
