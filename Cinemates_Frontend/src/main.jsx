import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Pages/Home/Home";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import AboutUs from "./components/Pages/Home/AboutUs";
import AboutCineMates from "./components/Pages/Home/AboutCinemates";
import Signin from "./components/Pages/Signin/Signin";
import Signup from "./components/Pages/Signup/Signup";
import AuthProvider from "./providers/AuthProvider";

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
        element: <Signin />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/about_us',
        element: <AboutUs />
      }, {
        path: '/about_cinemates',
        element: <AboutCineMates />
      },
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);