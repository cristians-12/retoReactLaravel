import { useState } from "react";

const useNotePopUp = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  return {
    name,
    description,
    handleName,
    handleDescription,
  };
};

export default useNotePopUp;
