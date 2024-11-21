import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import useNoteEdit from "../../hooks/notes/useNoteEdit";
import useNoteStore from "../../store/notes/noteStore";
import useHandleNotes from "../../hooks/notes/useHandleNotes";

interface NoteEditModalProps {
  setVisible: (value: boolean) => void;
}

const NoteEditModal: React.FC<NoteEditModalProps> = ({ setVisible }) => {
  const { handleDescription, handleName, handleCheckboxChange } = useNoteEdit();
  const { name, done, description } = useNoteStore();
  const { updateNote } = useHandleNotes();

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
          value={name}
        />

        <input
          type="text"
          placeholder="Descripcion de la nota"
          className="border border-gray-400 rounded-xl px-2 py-3 w-full"
          onChange={handleDescription}
          value={description}
        />

        <div className="flex items-center gap-5">
          <p>Marcar tarea como terminada</p>
          <input
            type="checkbox"
            className="transform scale-150"
            name=""
            id=""
            checked={done == 1 ? true : false}
            onChange={handleCheckboxChange}
          />
        </div>

        <button
          onClick={() => {
            setVisible(false);
            updateNote();
          }}
          className="bg-blue-500 w-fit rounded-lg text-white px-3 py-2"
        >
          Editar nota
        </button>
      </div>
    </div>
  );
};

export default NoteEditModal;
