import React, { useState } from "react";

import "./header.css";
import { ReactComponent as SearchOutlineIcon } from "../../icons/search-outline.svg";
import { ReactComponent as ServerOutlineIcon } from "../../icons/server-outline.svg";
import { ReactComponent as AvatarIcon } from "../../icons/avatar.svg";

const Header = ({ onChangeQuery }) => {
  const [inputValue, onChangeInput] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    onChangeQuery(inputValue);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div>
        <ServerOutlineIcon className="server-outline" />
        <a className="navbar-brand" href="/">
          Social-DB
        </a>
      </div>

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
        <AvatarIcon className="avatar" />
      </div>
    </nav>
  );
};

export default Header;
