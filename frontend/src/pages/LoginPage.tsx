import React, { useEffect, useState } from "react";
import InputUser from "../components/InputUser";
import useInput from "../hooks/useInput";
import useRegister from "../hooks/register/useRegister";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/user/userStore";
import useReloadStore from "../store/reload/reloadStore";

const LoginPage = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { handleInputChange } = useInput();
  const { handleLogin } = useRegister();
  const navigate = useNavigate();
  const { logged } = useUserStore();
  const { reload } = useReloadStore();
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [reload]);

  return (
    <div className="flex-col flex justify-center items-center">
      <div className="flex flex-col gap-5 w-[30vw] items-center bg-blue-500 p-3 rounded-lg">
        <input
          type="text"
          placeholder="Ingresa tu email"
          className="rounded-lg px-3 py-2 w-full"
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <InputUser
          changeValue={setPassword}
          placeholder="Ingresa tu password"
          type="password"
        />
        <button
          onClick={() => handleLogin(email, password)}
          className="bg-blue-200 w-fit rounded-md px-4 py-2 font-bold"
        >
          Iniciar sesion
        </button>
        <p className="text-white">
          No tengo una cuenta, deseo{" "}
          <Link to={"/register"} className="font-bold">
            registrarme
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
