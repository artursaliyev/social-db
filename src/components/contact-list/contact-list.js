import React from "react";
import { withRouter } from "react-router-dom";

import ContactCard from "../contact-card";
import "./contact-list.css";

const ContactList = props => {
  const { data, ...actions } = props;

  const renderItems = (arr, actions) => {
    return arr.map(item => {
      return <ContactCard key={item.id} {...item} {...actions} />;
    });
  };

  const items = renderItems(data, actions);

  return (
    <div className="user-list container">
      <div className="row">
        <div className="col">{items}</div>
      </div>
    </div>
  );
};

export default withRouter(ContactList);

ContactList.defaultProps = {
  data: []
};
