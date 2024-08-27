import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Pages/Home/Home";
import AboutUs from "./components/Pages/Home/AboutUs";
import AboutCineMates from "./components/Pages/Home/AboutCinemates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: '/movies',
        element: <>movies</>
      }, {
        path: '/feed',
        element: <>Feed</>
      }, {
        path: '/watchlist',
        element: <>Watchlist</>
      }, {
        path: '/signin',
        element: <>Signin</>
      },{
        path: '/about_us',
        element: <AboutUs/>
      },{
        path: '/about_cinemates',
        element: <AboutCineMates/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);