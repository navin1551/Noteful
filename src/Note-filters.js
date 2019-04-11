import NoteList from "./components/NoteList";

export const findNote = (notes, noteId) =>
  notes.find(note => note.id === noteId);

export const getNotes = (notes, folderId) =>
  !folderId ? NoteList : notes.filter(note => note.folderId === folderId);
