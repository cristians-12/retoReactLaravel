import { create } from "zustand";

interface NoteStore {
  id: number;
  name: string;
  description: string;
  done: number;
  setNameNote: (nameval: string) => void;
  setDescriptionNote: (descriptionval: string) => void;
  setIdVal: (idval: number) => void;
  setDoneVal: (doneval: number) => void;
  setNote: (
    nameval: string,
    descriptionval: string,
    idval: number,
    doneval: number
  ) => void;
}

const useNoteStore = create<NoteStore>((set) => ({
  name: "",
  description: "",
  id: 0,
  done: 0,
  setNameNote: (nameval) => {
    set({
      name: nameval,
    });
  },
  setDescriptionNote: (descriptionval) => {
    set({
      description: descriptionval,
    });
  },
  setIdVal: (idval) => {
    set({
      id: idval,
    });
  },
  setDoneVal: (doneval) => {
    set({
      done: doneval,
    });
  },
  setNote: (
    nameval: string,
    descriptionval: string,
    idval: number,
    doneval: number
  ) => {
    set({
      name: nameval,
      description: descriptionval,
      id: idval,
      done: doneval,
    });
  },
}));

export default useNoteStore;
