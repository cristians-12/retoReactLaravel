import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import useNotePopUp from "../../hooks/notes/useNotePopUp";
import useHandleNotes from "../../hooks/notes/useHandleNotes";

interface NotePopUpProps {
  setVisible: (value: boolean) => void;
}
const NotePopUp: React.FC<NotePopUpProps> = ({ setVisible }) => {
  const { handleDescription, handleName, name, description } = useNotePopUp();
  const { createNote } = useHandleNotes();
  return (
    <div className="bg-[rgba(0,0,0,0.7)] fixed w-screen flex items-center justify-center h-screen top-0">
      <div className="bg-white relative w-[30vw] flex flex-col p-4 justify-center items-center rounded-xl gap-5">
        <IoIosCloseCircleOutline
          className="cursor-pointer right-0 top-0"
          size={30}
          onClick={() => setVisible(false)}
        />
        <input
          type="text"
          placeholder="Titulo de la nota"
          className="border border-gray-400 rounded-xl  px-2 py-3 w-full"
          onChange={handleName}
        />

        <input
          type="text"
          placeholder="Descripcion de la nota"
          className="border border-gray-400 rounded-xl px-2 py-3 w-full"
          onChange={handleDescription}
        />

        <button
          onClick={() => {
            createNote(name, description);
            setVisible(false);
          }}
          className="bg-blue-500 w-fit rounded-lg text-white px-3 py-2"
        >
          Agregar nota a mi lista
        </button>
      </div>
    </div>
  );
};

export default NotePopUp;
