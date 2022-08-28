import React from "react";
import notes from "../notes";

function Note() {
  return (
    <div>
      {notes.map( notes =>
        <div className="note">
        <h1>{notes.title}</h1>
        <p>{notes.content}</p>
        </div>
      )}
    </div>
  );
}

export default Note;
