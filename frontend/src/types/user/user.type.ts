import { Note } from "../note/note.type";

export interface User {
  name?: string;
  email?: string;
  password?: string;
  notes?: Note[];
}
