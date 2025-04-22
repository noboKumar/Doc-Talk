import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import Loading from "../components/Ui/Loading";
import DoctorDetails from "../Pages/DoctorDetails";
import ErrorPage from "../components/Ui/ErrorPage";

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
        path: "/home/:regNo",
        loader: () => fetch("../doctorData.json"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: DoctorDetails,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
