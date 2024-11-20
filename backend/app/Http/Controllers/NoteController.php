<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Services\NoteServices;
use Illuminate\Http\Request;

class NoteController
{
    protected $noteService;

    public function __construct(NoteServices $noteServices)
    {
        $this->noteService = $noteServices;
    }
    public function index()
    {
        // $notes = Note::all();
        // return response()->json($notes);
        return $this->noteService->getAllNotes();
    }

    public function store(Request $request)
    {
        return $this->noteService->createNote();
    }
    public function getUserNote(Request $request)
    {
        return $this->noteService->getUserNote($request);
    }
}
