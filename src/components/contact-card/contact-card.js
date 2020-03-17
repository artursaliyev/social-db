import React from "react";
import { withRouter } from "react-router-dom";

import "./contact-card.css";

import Avatar from "../../icons/male.svg";
import { ReactComponent as LacationIcon } from "../../icons/location-outline.svg";
import { ReactComponent as ActionIcon } from "../../icons/arrow-redo-circle-outline.svg";
import { ReactComponent as CallIcon } from "../../icons/call-outline.svg";
import { ReactComponent as SocialIcon } from "../../icons/share-social-outline.svg";

const UserCard = props => {
  const { id, history } = props;

  const onSelectedItem = () => {
    history.push(`/contacts/${id}`);
  };
  return (
    <div className="container shadow m-2">
      <div className="user-card row align-item-center">
        <div className="user-card__avatar col-md-2">
          <img src={props.image_url || Avatar} alt="avatar" />
          <span className="text-muted">{props.sn_type.name}</span>
        </div>
        <div className="user-card__info col-md-9">
          <div>
            <h4>{props.sn_name}</h4>
          </div>
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
        <div className="user-card__action col-md-1">
          <button type="button" className="btn btn-default">
            <ActionIcon
              className="arrow-redo-circle-outline"
              onClick={onSelectedItem}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserCard);
