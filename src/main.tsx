import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";
import "./index.css";

import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/headphones",
    element: <Headphones />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/speakers",
    element: <Speakers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/earphones",
    element: <Earphones />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
