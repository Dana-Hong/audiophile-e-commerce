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
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Checkout from "./routes/checkout";
import Cart from "./components/modals/Cart";
import Index from "./routes";
import "./index.css";
import ProductIndex, { loader as productLoader } from "./routes/productIndex";
import CategoryIndex, { loader as categoryLoader } from "./routes/categoryIndex";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Index />} />
          <Route path=":category" element={<CategoryIndex />} />
          <Route path=":category/:product" element={<ProductIndex />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
