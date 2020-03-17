import React from "react";

import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
