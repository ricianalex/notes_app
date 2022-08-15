import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList({ notes, handleAddNote, handleDeleteNote, editingNote, changeColor, handleAddButton, showAddButton, toggleEdit, setSearchText }) {
    return (
        <div className="notes-list">
            {!showAddButton && <AddNote handleAddNote={handleAddNote} handleAddButton={handleAddButton} setSearchText={setSearchText}/>}
            {notes.map(note => 
                (<Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    color={note.color}
                    handleDeleteNote={handleDeleteNote}
                    editingStatus={note.editing}
                    editingNote={editingNote}
                    changeColor={changeColor}
                    toggleEdit={toggleEdit}
                />)
                )}
        </div>
    )
}
