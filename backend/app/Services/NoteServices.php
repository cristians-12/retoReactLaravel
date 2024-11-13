<?php

namespace App\Services;

use App\Models\Note;

class NoteServices
{
    public function createNote(array $data)
    {
        // Lógica para crear una nota
        return Note::create($data);
    }

    public function updateNote(Note $note, array $data)
    {
        // Lógica para actualizar una nota
        $note->update($data);
        return $note;
    }

    public function deleteNote(Note $note)
    {
        // Lógica para eliminar una nota
        return $note->delete();
    }

    public function getAllNotes($orderBy = 'created_at')
    {
        // Lógica para listar todas las notas
        return Note::orderBy($orderBy)->get();
    }
}
