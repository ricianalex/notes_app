import { useState } from "react"

export default function AddNote ({handleAddNote, handleAddButton, setSearchText}) {
    const [noteText, setNoteText] = useState('')
    const charLimit = 200

    function handleChange(event) {
        setNoteText(event.target.value)
    }

    function handleSaveClick() {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
            handleAddButton()
            setSearchText('')
        } else {
            alert("Please enter some text")
        }
    }
    return (
    <div className="note new">
        <textarea 
            cols="10" 
            rows="8"
            placeholder="Type to add a note..."    
            maxlength="200"
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{charLimit - noteText.length} Remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>)
}
