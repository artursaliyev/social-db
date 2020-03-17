import React from "react";

import "./no-data.css";

import { ReactComponent as NoDataIcon } from "../../icons/no-data.svg";

const NoData = () => {
  return (
    <div className="no-data">
      <NoDataIcon />
      <h5 className="text-muted">Нет данных</h5>
    </div>
  );
};

export default NoData;
