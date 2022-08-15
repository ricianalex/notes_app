import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList({ notes, handleAddNote, handleDeleteNote, editingNote, handleAddButton, showAddButton, toggleEdit, setSearchText }) {
    return (
        <div className="notes-list">
            {!showAddButton && <AddNote handleAddNote={handleAddNote} handleAddButton={handleAddButton} setSearchText={setSearchText}/>}
            {notes.map(note => 
                (<Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    editingStatus={note.editing}
                    editingNote={editingNote}
                    toggleEdit={toggleEdit}
                />)
                )}
        </div>
    )
}
