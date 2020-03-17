import React from "react";

import "./error-indicator.css";

import { ReactComponent as ErrorIndicatorIcon } from "../../icons/server-error.svg";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <ErrorIndicatorIcon />
      <h5 className="text-muted">Что то пошло не так, обновите страницу</h5>
    </div>
  );
};

export default ErrorIndicator;
