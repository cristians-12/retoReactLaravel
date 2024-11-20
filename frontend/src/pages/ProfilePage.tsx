import { useEffect } from "react";
import useUserStore from "../store/user/userStore";
import { useNavigate } from "react-router-dom";
import useHandleNotes from "../hooks/notes/useHandleNotes";
import { NoteInterface } from "../types/note.type";
import NoteCard from "../components/NoteCard";

const ProfilePage = () => {
  const { logged } = useUserStore();
  const navigate = useNavigate();
  const { getNotes, notesData } = useHandleNotes();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    getNotes();
  }, []);

  return (
    <>
      {notesData && notesData.length > 0 ? (
        <ul className="flex gap-5">
          {notesData.map((note: NoteInterface, index: number) => (
            <NoteCard
              key={index}
              name={note.name}
              description={note.description}
              done={note.done}
            />
          ))}
        </ul>
      ) : (
        <p>No hay notas disponibles.</p>
      )}
    </>
  );
};

export default ProfilePage;
