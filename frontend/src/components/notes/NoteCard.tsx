import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useHandleNotes from "../../hooks/notes/useHandleNotes";

interface NoteCardProps {
  name: string;
  description: string;
  done: number;
  id: number;
}
const NoteCard: React.FC<NoteCardProps> = ({ name, description, done, id }) => {
  const { deleteNote } = useHandleNotes();

  return (
    <div
      className={`${
        done === 1 ? "bg-green-500" : "bg-red-500"
      } w-[30%] px-3 rounded-lg text-white py-10`}
    >
      <h2 className="text-2xl">
        <span className="font-bold">Titulo:</span> {name}
      </h2>
      <div>
        <p className="font-bold">Descripcion:</p>
        <p>{description}</p>
      </div>
      <p className="mt-3 font-bold">
        {done == 0 ? "Tarea por realizar" : "Tarea realizada"}
      </p>
      <div className="mt-3">
        <div onClick={() => deleteNote(id)} className="cursor-pointer">
          <FaTrashAlt size={25} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
