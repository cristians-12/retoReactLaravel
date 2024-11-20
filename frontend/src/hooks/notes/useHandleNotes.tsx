import { useState } from "react";
import { API_URL } from "../../constants/api";
import useUserStore from "../../store/user/userStore";
import { NoteInterface } from "../../types/note.type";

const useHandleNotes = () => {
  const { token } = useUserStore();
  const [notesData, setNotesData] = useState<NoteInterface[] | null>(null);
  const getNotes = async () => {
    try {
      const respuesta = await fetch(`${API_URL}/api/notes/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const datos = await respuesta.json();
      if (datos) {
        setNotesData(datos);
        console.log(notesData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async (name: string, description: string) => {
    try {
      const respuesta = await fetch(`${API_URL}/api/notes/user`, {
        method: "post",
        body: JSON.stringify({ name, description }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const datos = await respuesta.json();
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getNotes,
    notesData,
    createNote,
  };
};

export default useHandleNotes;
