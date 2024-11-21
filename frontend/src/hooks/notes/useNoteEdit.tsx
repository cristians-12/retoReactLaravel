import React, { useState } from "react";
import useNoteStore from "../../store/notes/noteStore";

const useNoteEdit = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { setNameNote, setDescriptionNote, setDoneVal } = useNoteStore();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameNote(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    setDescriptionNote(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked === true) {
      setDoneVal(1);
    } else {
      setDoneVal(0);
    }
  };

  return {
    name,
    description,
    handleName,
    handleDescription,
    isChecked,
    handleCheckboxChange,
  };
};

export default useNoteEdit;
