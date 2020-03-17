import React from "react";
import "./notes.css";

import { ReactComponent as PersonIcon } from "../../icons/person-outline.svg";
import { ReactComponent as TimeIcon } from "../../icons/time-outline.svg";

const Notes = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="contact-form__notes">
          <div>
            <h4>Примечания</h4>
            <div className="note">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores repellat sequi accusamus eos nesciunt.
              </div>
              <div className="float-right">
                <PersonIcon />
                <span>Алиева С.</span>
                <TimeIcon />
                <span>8-03-2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
