import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsClicked(false);
    event.preventDefault();
  }

  function handleExpand() {
    setIsClicked(true);
  }

  function handleMouseOver() {
    setIsHovered(true);
    console.log(isHovered);
  }

  function handleMouseOut() {
    setIsHovered(false);
    console.log(isHovered);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          onClick={handleExpand}
          value={note.title}
          placeholder={isClicked ? "Title" : "Take a note..."}
        />

        {isClicked && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isClicked ? "3" : "1"}
          />
        )}
        <Zoom in={isClicked ? true : false}>
          <Fab
            onClick={submitNote}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <AddIcon className={isHovered && "buttonIcon"} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
