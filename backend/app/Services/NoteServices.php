<?php

namespace App\Services;

use App\Models\Note;

class NoteServices
{
    public function createNote(array $data)
    {
        return Note::create($data);
    }

    public function updateNote(Note $note, array $data)
    {
        $note->update($data);
        return $note;
    }

    public function deleteNote(Note $note)
    {

        return $note->delete();
    }

    public function getAllNotes($orderBy = 'created_at')
    {
        return Note::orderBy($orderBy)->get();
    }

    public function getUserNote($id){
        $note = Note::find($id);
        return $note;
    }
}
