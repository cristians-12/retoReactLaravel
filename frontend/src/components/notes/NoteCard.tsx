import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useHandleNotes from "../../hooks/notes/useHandleNotes";
import useNoteStore from "../../store/notes/noteStore";

interface NoteCardProps {
  name: string;
  description: string;
  done: number;
  id: number;
  setVisible: (value: boolean) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({
  name,
  description,
  done,
  id,
  setVisible,
}) => {
  const { setNote } = useNoteStore();
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
      <div className="mt-3 flex items-center gap-5">
        <div onClick={() => deleteNote(id)} className="cursor-pointer">
          <FaTrashAlt size={25} />
        </div>
        <div className="cursor-pointer">
          <FaEdit
            onClick={() => {
              setVisible(true);
              setNote(name, description, id, done);
            }}
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
