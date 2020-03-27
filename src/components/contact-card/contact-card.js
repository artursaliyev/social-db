import React from "react";
import { withRouter } from "react-router-dom";

import "./contact-card.css";

import Avatar from "../../icons/male.svg";
import { ReactComponent as LacationIcon } from "../../icons/location-outline.svg";
import { ReactComponent as CallIcon } from "../../icons/call-outline.svg";
import { ReactComponent as SocialIcon } from "../../icons/share-social-outline.svg";

const UserCard = props => {
  const { id, onSelectedItem, renderActionBtn } = props;

  const renderBtn = renderActionBtn(id);

  return (
    <div className="container shadow m-2">
      <div className="user-card row align-item-center">
        <div className="user-card__avatar col-md-2">
          <img
            src={props.image_url || Avatar}
            alt="avatar"
            onClick={() => {
              onSelectedItem(id);
            }}
          />
          <span className="text-muted">{props.sn_type.name}</span>
        </div>
        <div className="user-card__info col-md-9">
          <h4
            className="user-card__name"
            onClick={() => {
              onSelectedItem(id);
            }}
          >
            {props.sn_name}
          </h4>

          <div className="text-muted">
            <LacationIcon className="other-icons" />
            <span>
              {props.sn_id} | {props.sn_nickname}
            </span>
          </div>
          <div className="text-muted">
            <CallIcon className="other-icons" />
            <span>{props.sn_phone}</span>
          </div>
          <div className="text-muted">
            <SocialIcon className="other-icons" />
            <span>{props.sn_email}</span>
          </div>
        </div>
        <div className="user-card__action col-md-1">{renderBtn}</div>
      </div>
    </div>
  );
};

export default withRouter(UserCard);

UserCard.defaultProps = {
  id: null,
  onSelectedItem: () => {},
  renderActionBtn: () => {}
};
