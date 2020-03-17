import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../../service/http";
import "./contact-page.css";

import ContactForm from "../../contact-form";
import ContactPhoto from "../../contact-photo";
import Spinner from "../../spinner";

class ContactPage extends Component {
  state = {
    loading: true,
    data: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    api.contacts.getById(id).then(data => {
      this.setState({
        data,
        loading: false
      });
    });
  }

  onUpdateContact = data => {
    this.setState({ loading: true });
    return api.contacts.update(data).then(data => {
      this.setState({ data, loading: false });
    });
  };

  render() {
    const { loading, data } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="contact-page container">
        <div className="row">
          <div className="col-md-3">
            <ContactPhoto image_url={data.image_url} id={data.id} />
          </div>

          <div className="col-md-9">
            <ContactForm
              data={data}
              disabled={true}
              onSubmitHandler={this.onUpdateContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContactPage);
