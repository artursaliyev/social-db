import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../../service/http";
import "./add-contact-page.css";

import ContactForm from "../../contact-form";
import Spinner from "../../spinner";

class AddContactPage extends Component {
  state = {
    loading: false,
    socialNetworks: []
  };

  // componentDidMount() {
  //   api.contacts.socialNetworks().then(data => {
  //     this.setState({
  //       socialNetworks: data
  //     });
  //   });
  // }
  onCreateContact = data => {
    this.setState({ loading: true });
    api.contacts
      .create(data)
      .then(data => {
        this.props.history.push(`/contacts/${data.id}`);
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="add-contact-page container">
        <div className="row">
          <div className="col">
            <ContactForm onSubmitHandler={this.onCreateContact} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddContactPage);
