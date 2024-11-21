import { useEffect, useState } from "react";
import useUserStore from "../store/user/userStore";
import { useNavigate } from "react-router-dom";
import useHandleNotes from "../hooks/notes/useHandleNotes";
import { NoteInterface } from "../types/note.type";
import NoteCard from "../components/notes/NoteCard";
import useReloadStore from "../store/reload/reloadStore";
import NoteEditModal from "../components/notes/NoteEditModal";

const ProfilePage = () => {
  const { logged } = useUserStore();
  const navigate = useNavigate();
  const { getNotes, notesData } = useHandleNotes();
  const { reload } = useReloadStore();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!logged) {
      navigate("/login");
      return;
    }
    getNotes();
  }, [logged, reload]);

  return (
    <>
      {notesData && notesData.length > 0 ? (
        <ul className="flex gap-5 flex-wrap px-5">
          {notesData.map((note: NoteInterface) => (
            <NoteCard
              key={note.id}
              name={note.name}
              description={note.description}
              done={note.done}
              id={note.id}
              setVisible={setVisible}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center text-white font-bold">
          No hay notas disponibles.
        </p>
      )}
      {visible && <NoteEditModal setVisible={setVisible} />}
    </>
  );
};

export default ProfilePage;
