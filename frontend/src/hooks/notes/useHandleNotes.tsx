import { useState } from "react";
import { API_URL } from "../../constants/api";
import useUserStore from "../../store/user/userStore";
import { NoteInterface } from "../../types/note.type";
import useToast from "../toast/useToast";
import useReloadStore from "../../store/reload/reloadStore";
import useNoteStore from "../../store/notes/noteStore";

const useHandleNotes = () => {
  const { token } = useUserStore();
  const { errorToast, successToast } = useToast();

  const [notesData, setNotesData] = useState<NoteInterface[]>([]);
  const { changeReload } = useReloadStore();

  const { id, done, description, name } = useNoteStore();

  // Función para obtener las notas
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
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Función para crear una nueva nota
  const createNote = async (name: string, description: string) => {
    if (name === "" || description === "") {
      errorToast("Todos los campos deben estar llenos");
      return;
    }
    try {
      const respuesta = await fetch(`${API_URL}/api/notes/`, {
        method: "POST",
        body: JSON.stringify({ name, description }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const datos = await respuesta.json();
      if (datos.success) {
        successToast(datos.message);
        changeReload();
      } else {
        errorToast("Error creando la nota");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Función para eliminar una notaz
  const deleteNote = async (id: number) => {
    try {
      const respuesta = await fetch(`${API_URL}/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const datos = await respuesta.json();
      if (datos.success === true) {
        successToast(datos.message);
        changeReload();
        setNotesData((prevNotes) => prevNotes.filter((note) => note.id !== id));
      } else {
        errorToast(datos.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async () => {
    try {
      const respuesta = await fetch(`${API_URL}/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          done: done,
        }),
      });
      const datos = await respuesta.json();
      if (datos.success == true) {
        successToast(datos.message);
        changeReload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getNotes,
    notesData,
    createNote,
    deleteNote,
    updateNote,
  };
};

export default useHandleNotes;
