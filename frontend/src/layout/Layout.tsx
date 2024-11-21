import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import useUserStore from "../store/user/userStore";
import AgregarButton from "../components/AgregarButton";
import { useState } from "react";
import NotePopUp from "../components/notes/NotePopUp";

const Layout = () => {
  const { logged } = useUserStore();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <NavBar />
      <div className="pt-14 min-h-screen flex flex-col justify-center">
        <Outlet />
      </div>
      <Toaster />
      {logged && <AgregarButton setVisible={setVisible} />}
      {visible && <NotePopUp setVisible={setVisible} />}
    </>
  );
};

export default Layout;
