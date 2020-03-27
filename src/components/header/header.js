import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import { ReactComponent as SearchOutlineIcon } from "../../icons/search-outline.svg";
import { ReactComponent as ServerOutlineIcon } from "../../icons/server-outline.svg";
import { ReactComponent as AddContactIcon } from "../../icons/person-add-outline.svg";

const Header = ({ onChangeQuery }) => {
  const [inputValue, onChangeInput] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    onChangeQuery(inputValue);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <Link to="/">
        <ServerOutlineIcon className="server-outline" />
        <span>Social-DB</span>
      </Link>

      <form className="search-form form-inline" onSubmit={onSubmitHandler}>
        <SearchOutlineIcon className="search-outline" />
        <input
          className="form-control"
          type="search"
          placeholder="Search ids/full name..."
          aria-label="Search"
          onChange={e => {
            onChangeInput(e.target.value);
          }}
        />
      </form>

      <div className="user-name">
        <Link to="/add-contact">
          <AddContactIcon className="header__add-contact" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
