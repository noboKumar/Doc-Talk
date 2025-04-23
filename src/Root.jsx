import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, useLocation, useNavigation } from "react-router";
import Loading from "./components/Ui/Loading";

const Root = () => {
  const ValidRoutes = ["/", "/my-bookings", "/blogs"];
  const location = useLocation();
  const currentPath = location.pathname;
  const isValidRoute = ValidRoutes.includes(currentPath);
  const { state } = useNavigation();

  return (
    <div className="plus-jakarta-sans-font">
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-465px)]">
        {state == "loading" ? <Loading /> : <Outlet />}
      </div>
      {isValidRoute && <Footer></Footer>}
    </div>
  );
};

export default Root;
