import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    let { name, value } = event.target;

    setNewNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function createNote(event) {
    props.onAdd(newNote);
    setNewNote({ title: "", content: "" });

    event.preventDefault();
  }

  const [isExpanded, setIsExpanded] = useState(false);

  function expand(event) {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={newNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={createNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
