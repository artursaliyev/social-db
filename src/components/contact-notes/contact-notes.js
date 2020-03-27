import React, { useState } from "react";
import { dateToLocaleString } from "../../utils/date-filters";
import "./contact-notes.scss";

import { ReactComponent as PersonIcon } from "../../icons/person-outline.svg";
import { ReactComponent as TimeIcon } from "../../icons/time-outline.svg";

const Note = ({ text, creator, create_date }) => {
  return (
    <div className="contact-notes__item">
      <p className="contact-notes__content">{text}</p>
      <div className="contact-notes__info">
        <PersonIcon />
        <span>{creator}</span>
        <TimeIcon />
        <span>{dateToLocaleString(create_date)}</span>
      </div>
      <hr />
    </div>
  );
};

const AddNote = ({ onAddNote }) => {
  const [value, changeValue] = useState("");

  const onChangeValue = e => {
    changeValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onAddNote(value);
    changeValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Добавте текст и нажмите Enter..."
        value={value}
        onChange={onChangeValue}
      />
    </form>
  );
};

const ContactNotes = ({ notes, onAddNote }) => {
  const renderItems = arr => {
    return arr.map(item => {
      return <Note key={item.id} {...item} />;
    });
  };

  const items = renderItems(notes);

  return (
    <div className="contact-notes">
      <h4 className="contact-notes__header">Примечания</h4>

      <div className="contact-notes__add-notes">
        <AddNote onAddNote={onAddNote} />
      </div>

      <div className="contact-notes__items">{items}</div>
    </div>
  );
};

export default ContactNotes;
