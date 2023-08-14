import React from "react";
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
} from "react-router-dom";
import Root from "./routes/root";
import Index from "./routes";
import Checkout from "./routes/checkout";
import Cart from "./components/modals/Cart";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Orders from "./routes/orders";
import ErrorPage from "./error-page";
import ProtectedRoutes from "./routes/protected";
import ProductIndex, { loader as productLoader } from "./routes/productIndex";
import CategoryIndex, { loader as categoryLoader } from "./routes/categoryIndex";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: ":category",
        element: <CategoryIndex />,
        errorElement: <ErrorPage />,
        loader: categoryLoader as LoaderFunction,
      },
      {
        path: ":category/:product",
        element: <ProductIndex />,
        errorElement: <ErrorPage />,
        loader: productLoader as LoaderFunction,
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
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        element: <ProtectedRoutes />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/orders",
            element: <Orders />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
