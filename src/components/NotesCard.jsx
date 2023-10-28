import React from "react";
import "../style/NotesCard.css";

const NotesCard = ({ title, date, content, handleDelete, handleArchive }) => {
  return (
    <div className="notes-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleArchive}>Archive</button>
    </div>
  );
};

export default NotesCard;
