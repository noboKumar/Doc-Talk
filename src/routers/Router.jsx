import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import Loading from "../components/Ui/Loading";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("../doctorData.json"),
        hydrateFallbackElement: <Loading></Loading>,
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
