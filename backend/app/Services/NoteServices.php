<?php

namespace App\Services;

use App\Models\Note;

class NoteServices
{
    public function createUserNoteService($data)
    {
        // Validar los datos del request
        $validated = $data->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
        $user = auth()->user();

        $note = new Note();
        $note->name = $validated['name'];
        $note->description = $validated['description'];
        $note->user_id = $user->id;
        $note->save();

        return $note;
    }

    public function getAllNotes($orderBy = 'created_at')
    {
        return Note::orderBy($orderBy)->get();
    }

    public function getUserNotes($orderBy = 'created_at')
    {
        $user = auth()->user();


        if (!$user) {
            return response()->json(['message' => 'Usuario no autenticado'], 401);
        }

        return Note::where('user_id', $user->id)
            ->orderBy($orderBy)
            ->get();
    }
}
