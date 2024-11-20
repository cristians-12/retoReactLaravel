import React from "react";

interface NoteCardProps {
  name: string;
  description: string;
  done: number;
}
const NoteCard: React.FC<NoteCardProps> = ({ name, description, done }) => {
  return (
    <div
      className={`${
        done === 1 ? "bg-green-500" : "bg-red-500"
      } w-[30%] px-3 rounded-lg text-white py-10`}
    >
      <h2 className="text-2xl">
        <span className="font-bold">Titulo:</span> {name}
      </h2>
      <p className="font-bold">Descripcion:</p>
      <p>{description}</p>
    </div>
  );
};

export default NoteCard;
