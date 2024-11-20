import React from "react";
import useUserStore from "../store/user/userStore";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { logged } = useUserStore();

  return (
    <nav className="flex justify-between fixed w-full bg-blue-500 px-5 py-2 text-white">
      <Link to={'/'} className="text-[1.2rem] font-bold">NoteAPP</Link>
      <div>
        {logged ? (
          <Link to={"/notes"}>Mis notas.</Link>
        ) : (
          <div className="flex gap-5">
            <Link to={"/register"}>Registrarme</Link>
            <Link to={"/login"}>Iniciar sesion</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
