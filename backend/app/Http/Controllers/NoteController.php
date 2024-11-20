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
        return $this->noteService->getAllNotes();
    }
    public function userCreateNote(Request $request)
    {
        return $this->noteService->createUserNoteService($request);
    }
    public function getUserNote(Request $request)
    {
        $orderBy = $request->query('orderBy', 'created_at');
        return $this->noteService->getUserNotes($orderBy);
    }
}
