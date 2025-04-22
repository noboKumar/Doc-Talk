import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import Loading from "../components/Ui/Loading";
import DoctorDetails from "../Pages/DoctorDetails";

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
        loader: () => fetch("../blogPageData.json"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Blogs,
      },
      {
        path: "/home/:id",
        loader: () => fetch("../doctorData.json"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: DoctorDetails,
      },
    ],
  },
]);
