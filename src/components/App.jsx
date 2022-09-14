import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setNotesArr] = useState([]);

  function addNotes(newNote) {
    setNotesArr((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotesArr((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notesArr.map((notes, index) => {
        return (
          <Note
            onDelete={deleteNote}
            key={Math.random() * 10}
            index={index}
            title={notes.title}
            content={notes.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
