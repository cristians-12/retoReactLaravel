import React from "react";
import useInput from "../hooks/useInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputUserProps {
  changeValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type?: string;
}

const InputUser: React.FC<InputUserProps> = ({
  changeValue,
  placeholder,
  type = "text",
}) => {
  const { changeVisibility, watch } = useInput();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type={watch ? "text" : type}
        className="rounded-lg px-3 py-2 w-full"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {watch ? (
        <FaEyeSlash
          className="absolute right-5 top-2 cursor-pointer"
          size={25}
          onClick={changeVisibility}
          color="blue"
        />
      ) : (
        <FaEye
          className="absolute right-5 top-2 cursor-pointer"
          size={25}
          onClick={changeVisibility}
          color="blue"
        />
      )}
    </div>
  );
};

export default InputUser;
