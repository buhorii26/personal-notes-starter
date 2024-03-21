import React from "react";
import { getInitialData } from "../utils/index";
function NoteItemContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{getInitialData(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemContent;