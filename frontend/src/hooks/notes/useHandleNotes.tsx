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
  return {
    getNotes,
    notesData,
  };
};

export default useHandleNotes;
