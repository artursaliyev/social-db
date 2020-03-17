import React from "react";
import { Link } from "react-router-dom";

import "./add-cantact-button.css";

import { ReactComponent as Icon } from "../../icons/person-add-outline.svg";

const AddContactButton = () => {
  return (
    <Link to="/add-contact">
      <button type="button" className="add-contact btn btn-warning">
        <Icon className="person-add-outline" />
      </button>
    </Link>
  );
};

export default AddContactButton;
