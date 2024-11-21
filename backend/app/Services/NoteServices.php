<?php

namespace App\Services;

use App\Models\Note;

class NoteServices
{
    public function createUserNoteService($data)
    {
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

        return response()->json(['data' => $note, 'success' => true, 'message' => 'Note created successfully']);
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

    public function deleteUserNoteService($noteId)
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['message' => 'User not authorized', 'success' => false], 401);
        }

        $note = Note::where('id', $noteId)->where('user_id', $user->id)->first();

        if (!$note) {
            return response()->json(['message' => 'Note not found', 'success' => false], 404);
        }

        $note->delete();

        return response()->json(['success' => true, 'message' => 'Note deleted successfully']);
    }
}
