import React from "react";
import useUserStore from "../store/user/userStore";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { logged, logout } = useUserStore();

  return (
    <nav className="flex justify-between fixed w-full bg-blue-500 px-5 py-2 text-white">
      <Link to={"/"} className="text-[1.2rem] font-bold">
        NoteAPP
      </Link>
      <div>
        {logged ? (
          <div className="flex gap-5 items-center">
            <Link to={"/notes"}>Mis notas</Link>
            <button
              onClick={logout}
              className="bg-white px-3 text-black font-bold rounded-md py-1"
            >
              Cerrar sesion
            </button>
          </div>
        ) : (
          <div className="flex gap-5 font-bold">
            <Link to={"/register"}>Registrarme</Link>
            <Link to={"/login"}>Iniciar sesion</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
