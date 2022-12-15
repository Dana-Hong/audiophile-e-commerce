import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
      {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
      },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
            <RouterProvider router={router} />
      </React.StrictMode>
);
