import React from "react";

interface AgregarButtonProps {
  setVisible: (value:boolean) => void;
}
const AgregarButton: React.FC<AgregarButtonProps> = ({ setVisible }) => {
  return (
    <div>
      <button
        onClick={() => setVisible(true)}
        className="bg-blue-500 fixed bottom-5 right-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Agregar nota
      </button>
    </div>
  );
};

export default AgregarButton;
