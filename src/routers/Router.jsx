import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../components/Home";
import MyBookings from "../components/MyBookings";
import Blogs from "../components/Blogs";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/my-bookings",
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);
