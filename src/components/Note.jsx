import bin from "../icons/bin.png"
import { useState } from "react"

export default function Note({id, text, date, handleDeleteNote, editingNote, editingStatus, toggleEdit}) {
    const charLimit = 200



    return (
        <div className={editingStatus ? "editingNote" : "note"}>
            <span>{editingStatus ? <textarea onChange={(event) => editingNote(event, id)} cols="10" rows="8" value={text} className="textarea"></textarea> : text}</span>
            <div className="note-footer">
                <small>{editingStatus ? charLimit - text.length + " Remaining" : date}</small>
                <button onClick={() => toggleEdit(id)} className="save" >{editingStatus ? "Save" : "Edit"}</button>
                <img src={bin} width="10 em" className="delete-icon" onClick={(event) => handleDeleteNote(event, id)}/>
            </div>
        </div>
    )
}
 