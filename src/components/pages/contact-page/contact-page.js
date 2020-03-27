import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import api from "../../../service/http";
import "./contact-page.scss";

import ContactForm from "../../contact-form";
import ContactPhoto from "../../contact-photo";
import Spinner from "../../spinner";
import ContactNotes from "../../contact-notes";
import OtherContacts from "../../other-contacts";

class AddOtherContact extends Component {
  componentDidUpdate(prevProps) {}
  render() {
    const {
      id,
      onChangeVisibleAddOtherContact,
      onAddRelation,
      data,
      onSearchContact
    } = this.props;
    console.log("AddOtherContact: ", data);

    console.log("AddOtherContact", id);
    return (
      <>
        <div className="row float-right mr-5">
          <div className="col">
            <button
              className="btn text-primary"
              onClick={onChangeVisibleAddOtherContact}
            >
              Готово
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ContactPhoto id={id} image_url={data.image_url} />
          </div>

          <div className="col-md-9">
            <ContactForm
              data={data}
              onSubmitHandler={onAddRelation}
              onSearchContact={onSearchContact}
            />
          </div>
        </div>
      </>
    );
  }
}

class ContactPage extends Component {
  state = {
    loading: true,
    data: null,
    noteValue: "xxx",
    visibleAddOtherContact: false,
    lastId: null,
    otherData: {}
  };

  componentDidMount() {
    this.onGetById();
  }
  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const nextId = this.props.match.params.id;
    if (prevId !== nextId) {
      this.onGetById();
    }
  }

  onGetById = () => {
    const { id } = this.props.match.params;
    api.contacts.getById(id).then(data => {
      this.setState({
        data,
        loading: false
      });
    });
  };

  onUpdateContact = data => {
    return api.contacts.update(data);
  };

  onAddRelation = data => {
    const { id } = this.props.match.params;
    api.contacts.addRelations(id, data).then(data => {
      this.setState({ data, lastId: data.last_id });
    });
  };

  onAddNote = async text => {
    const { id } = this.props.match.params;
    const response = await api.contacts.addNote(id, { text });
    const data = { ...this.state.data };
    data.notes.unshift(response);
    this.setState({ data });
  };

  onChangeVisibleAddOtherContact = () => {
    this.setState({
      visibleAddOtherContact: !this.state.visibleAddOtherContact,
      otherData: {}
    });
    this.onGetById();
  };

  onSearchContact = formData => {
    const { sn_id, sn_nickname, sn_type_id } = formData;
    if (!sn_id && !sn_nickname) {
      NotificationManager.error("Заполните ID либо Nickname", "Ошибка!");
    } else {
      api.contacts
        .searchContact(sn_id, sn_nickname, sn_type_id)
        .then(otherData => {
          this.setState({ otherData });
        });
    }
  };

  render() {
    const {
      loading,
      data,
      otherData,
      lastId,
      visibleAddOtherContact
    } = this.state;

    if (loading) {
      return <Spinner />;
    }

    const addOtherContactAndOtherContacts = visibleAddOtherContact ? (
      <AddOtherContact
        id={lastId}
        data={otherData}
        onSearchContact={this.onSearchContact}
        onChangeVisibleAddOtherContact={this.onChangeVisibleAddOtherContact}
        onAddRelation={this.onAddRelation}
      />
    ) : (
      <OtherContacts
        relations={data.relations}
        onChangeVisibleAddOtherContact={this.onChangeVisibleAddOtherContact}
      />
    );

    return (
      <div className="contact-page container">
        <div className="row ">
          <div className="col-md-3 ">
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

        <div className="row">
          <div className="col">
            <div className="contact-page__other-contacts">
              <h4 className="contact-page__relations-title">Другие профили</h4>

              {addOtherContactAndOtherContacts}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="contact-page__notes">
              <ContactNotes notes={data.notes} onAddNote={this.onAddNote} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ContactPage);
