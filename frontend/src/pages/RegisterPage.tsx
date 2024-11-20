import React, { useState } from "react";
import InputUser from "../components/InputUser";
import useInput from "../hooks/useInput";
import useRegister from "../hooks/register/useRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { handleInputChange } = useInput();
  const { handleRegister } = useRegister();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 w-[30vw] items-center bg-blue-500 p-3 rounded-lg">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="rounded-lg px-3 py-2 w-full"
          onChange={(e) => handleInputChange(e, setName)}
        />
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
          onClick={() => handleRegister(name, email, password)}
          className="bg-blue-200 w-fit rounded-md px-4 py-2 font-bold"
        >
          Registrarse
        </button>
        <p className="text-white">
          Ya tengo una cuenta, deseo{" "}
          <Link to={"/login"} className="font-bold">
            iniciar sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
