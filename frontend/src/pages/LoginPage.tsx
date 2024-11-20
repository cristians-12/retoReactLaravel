import React, { useState } from "react";
import InputUser from "../components/InputUser";
import useInput from "../hooks/useInput";
import useRegister from "../hooks/register/useRegister";

const LoginPage = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { handleInputChange } = useInput();
  const { handleLogin } = useRegister();

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
      </div>
    </div>
  );
};

export default LoginPage;
