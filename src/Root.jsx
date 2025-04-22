import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router";

const Root = () => {
  const ValidRoutes = ["/", "/my-bookings", "/blogs"];
  const location = useLocation();
  const currentPath = location.pathname;
  const isValidRoute = ValidRoutes.includes(currentPath);

  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-465px)]">
        <Outlet></Outlet>
      </div>
      {isValidRoute && <Footer></Footer>}
    </div>
  );
};

export default Root;
