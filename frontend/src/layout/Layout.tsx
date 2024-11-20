import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-14 min-h-screen flex flex-col justify-center">
        <Outlet />
      </div>
      <Toaster />
    </>
  );
};

export default Layout;
