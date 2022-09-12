import { useState, useEffect } from 'react'
import './App.css'
import NotesList from "./components/NotesList"
import { nanoid } from 'nanoid'
import Search from "./components/Search"
import Header from "./components/Header"

function App() {
const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || [])

const [searchText, setSearchText] = useState("")

const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)

const [showAddButton, setShowAddButton] = useState(true)

useEffect(function() {
  localStorage.setItem('notes', JSON.stringify(notes))
}, [notes])

useEffect(function () {
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
}, [darkMode])

function addNote(text) {
  const date = new Date()
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
    editing: false,
    color: "yellow"
  }
  setNotes(oldNotes => [newNote, ...oldNotes])
}

console.log(notes)

function deleteNote(event, noteId) {
  setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
}

// THIS WAS A TRY AT MAKING THE RECENT EDITED NOTE GOING TO THE TOP - IT DOES NOT WORK, BUT IT'S CLOSE

// function editingNote(event, noteID) {
//   if (event.target.value.trim().length > 0) {
//     setNotes(oldNotes => {
//       const newArray = []
//       for (let i = 0; i < oldNotes.length; i++){
//         const note = oldNotes[i]
//         if(note.id === noteID) {
//           newArray.unshift({ ...note, text: event.target.value })
//         } else {
//           newArray.push(note)
//         }
//       }
//       return newArray
//     })
//   } else {alert("You cannot leave a note without text")}
// }

function toggleEdit(noteId) {
  setNotes(oldNotes => oldNotes.map(note => {
    return note.id === noteId
      ? { ...note, editing: !note.editing }
      : note
  }))
}

function editingNote(event, noteID) {
  if (event.target.value.trim().length > 0) {
    setNotes(oldNotes => oldNotes.map(note => {
      return note.id === noteID 
        ? { ...note, text: event.target.value }
        : note
    }))
  } else {alert("You cannot leave a note without text")}

}

function changeColor(event, noteId) {
  setNotes(oldNotes => oldNotes.map(note => {
    return note.id === noteId 
      ? { ...note, color: event.target.value }
      : note
  }))
}

function toggleAddButton() {
  setShowAddButton(prevState => !prevState)
}

  return (
    <div className={darkMode ? "container dark-mode" : "container"}>
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
        <Search handleSearchNote={setSearchText} Text={searchText}/>
        {showAddButton && <button className="add-btn" onClick={toggleAddButton}> Add a note</button> }
        <NotesList 
          notes={notes.filter(note => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          editingNote={editingNote}
          changeColor={changeColor}
          handleAddButton={toggleAddButton}
          showAddButton={showAddButton}
          toggleEdit={toggleEdit}
          setSearchText={setSearchText}
          darkMode={darkMode}
        />
    </div>
  )
}

export default App
