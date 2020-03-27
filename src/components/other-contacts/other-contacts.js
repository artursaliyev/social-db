import React from "react";
import { Link } from "react-router-dom";

import "./other-contacts.scss";
import { ReactComponent as AddUserIcon } from "../../icons/person-add-outline.svg";
import { ReactComponent as NotPhoto } from "../../icons/not-photo.svg";

const Contact = ({ id, image_url, sn_name, sn_type }) => {
  const avatar = image_url ? (
    <img src={image_url} alt="avatar" className="other-contacts__avatar" />
  ) : (
    <NotPhoto className="other-contacts__avatar" />
  );

  return (
    <div className="other-contacts__item">
      <Link to={`/contacts/${id}`}>{avatar}</Link>
      <div>{sn_name}</div>
      <div className="text-info">({sn_type.name})</div>
    </div>
  );
};

const AddOtherContacts = ({ onChangeVisibleAddOtherContact }) => {
  return (
    <div className="other-contacts__add-user">
      <AddUserIcon onClick={onChangeVisibleAddOtherContact} />
    </div>
  );
};

const OtherContacts = ({
  relations,
  onChangeVisibleAddOtherContact,
  ...items
}) => {
  const renderItems = arr => {
    return arr.map(item => {
      return <Contact key={item.id} {...item} {...items} />;
    });
  };

  const contacts = renderItems(relations);

  return (
    <div className="other-contacts">
      <div className="other-contacts__items">
        {contacts}
        <AddOtherContacts
          onChangeVisibleAddOtherContact={onChangeVisibleAddOtherContact}
        />
      </div>
    </div>
  );
};

export default OtherContacts;

OtherContacts.defaultProps = {
  relations: []
};
