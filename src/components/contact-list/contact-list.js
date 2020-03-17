import React from "react";

// import compose from "../../utils/compose";
// import { withServiceApi, withData } from "../hoc";
import ContactCard from "../contact-card";
import "./contact-list.css";

const ContactList = ({ data }) => {
  const renderItems = arr => {
    return arr.map(item => {
      return <ContactCard key={item.id} {...item} />;
    });
  };

  const items = renderItems(data);

  return (
    <div className="user-list container">
      <div className="row">
        <div className="col">{items}</div>
      </div>
    </div>
  );
};

// const mapMethodsToProps = api => {
//   return {
//     getData: api.contacts.all
//   };
// };

// export default compose(
//   withServiceApi(mapMethodsToProps),
//   withData
// )(ContactList);

export default ContactList;

ContactList.defaultProps = {
  data: []
};
