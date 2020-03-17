import React from "react";

import "./page-not-found.scss";
import { ReactComponent as PageNotFoundIcon } from "../../icons/page-not-found.svg";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <PageNotFoundIcon />
      <h2 className="text-muted">Страница не найдена</h2>
    </div>
  );
};

export default PageNotFound;
