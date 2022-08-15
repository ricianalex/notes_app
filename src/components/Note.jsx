import bin from "../icons/bin.png"
import { useState } from "react"

export default function Note({id, text, date, color, handleDeleteNote, editingNote, changeColor, editingStatus, toggleEdit}) {
    const charLimit = 200



    return (
        <div className={editingStatus ? "editingNote" : `note ${color}`}>
            <span>{editingStatus ? <textarea onChange={(event) => editingNote(event, id)} cols="10" rows="8" value={text} className="textarea"></textarea> : text}</span>
            <div className="note-footer">
                <small>{editingStatus ? charLimit - text.length + " Remaining" : date}</small>
                <select
                    value={color}
                    onChange={(event) => changeColor(event, id)}
                    className="select-color"
                >
                    <option value="yellow" className={color === "yellow" ? "" : "yellow-bubble"}>{color === "yellow" ? "-- color --" : "Yellow"}</option>
                    <option value="red" className="red-bubble">Red</option>
                    <option value="green" className="green-bubble">Green</option>
                    <option value="blue" className="blue-bubble">Blue</option>
                </select>
                <button onClick={() => toggleEdit(id)} className="save" >{editingStatus ? "Save" : "Edit"}</button>
                <img src={bin} width="10 em" className="delete-icon" onClick={(event) => handleDeleteNote(event, id)}/>
            </div>
        </div>
    )
}
 