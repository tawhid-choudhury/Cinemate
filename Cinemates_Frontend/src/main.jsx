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
      },
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);