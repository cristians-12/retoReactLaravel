import { useState } from "react";

const useInput = () => {
  const [watch, setWatch] = useState<boolean>(false);
  const changeVisibility = () => setWatch(!watch);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    cambio: React.Dispatch<React.SetStateAction<string>>
  ) => {
    cambio(e.target.value);
  };

  return {
    changeVisibility,
    watch,
    handleInputChange,
  };
};

export default useInput;
