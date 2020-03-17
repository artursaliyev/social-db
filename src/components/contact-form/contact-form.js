import React, { Component } from "react";
import api from "../../service/http";

import "./contact-form.css";

class ContactForm extends Component {
  state = {
    socialNetworks: [],
    sn_id: "",
    sn_nickname: "",
    sn_name: "",
    sn_phone: "",
    sn_email: "xxx@yyy.zz",
    sn_type_id: 1
  };

  componentDidMount() {
    const { data } = this.props;
    if (data) {
      this.update(data);
    }
    api.contacts.socialNetworks().then(data => {
      this.setState({
        socialNetworks: data
      });
    });
  }

  update = data => {
    this.setState({
      ...data
    });
  };
  optionElements = items => {
    return items.map(({ id, name }) => {
      return (
        <option key={id} value={id}>
          {name}
        </option>
      );
    });
  };
  onChangeId = event => {
    this.setState({
      sn_id: event.target.value
    });
  };
  onChangeNickName = event => {
    this.setState({
      sn_nickname: event.target.value
    });
  };
  onChangeName = event => {
    this.setState({
      sn_name: event.target.value
    });
  };
  onChangeEmail = event => {
    this.setState({
      sn_email: event.target.value
    });
  };
  onChangePhone = event => {
    this.setState({
      sn_phone: event.target.value
    });
  };
  onChangeSocialNetwork = event => {
    this.setState({
      sn_type_id: event.target.value
    });
  };
  onFinally = () => {
    this.setState({ loading: false, error: false });
  };

  onSubmit = event => {
    const { onSubmitHandler } = this.props;
    event.preventDefault();
    const {
      id,
      sn_id,
      sn_nickname,
      sn_name,
      sn_phone,
      sn_email,
      sn_type_id
    } = this.state;
    const data = {
      id,
      sn_id,
      sn_nickname,
      sn_name,
      sn_phone,
      sn_email,
      sn_type_id
    };
    onSubmitHandler(data);
  };

  render() {
    const { disabled } = this.props;
    const {
      socialNetworks,
      sn_id,
      sn_nickname,
      sn_name,
      sn_email,
      sn_phone,
      sn_type_id
    } = this.state;

    return (
      <form className="contact-form__info" onSubmit={this.onSubmit}>
        <h2 className="add-contact-header">Анкета</h2>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="snId">ID</label>
            <input
              type="text"
              className="form-control"
              required
              id="snId"
              value={sn_id}
              disabled={disabled}
              onChange={this.onChangeId}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="nickName">Кличка</label>
            <input
              type="text"
              className="form-control"
              id="nickName"
              value={sn_nickname}
              onChange={this.onChangeNickName}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">ФИО</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Полное имя"
            value={sn_name}
            onChange={this.onChangeName}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={sn_email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={sn_phone}
              onChange={this.onChangePhone}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select
              className="form-control"
              value={sn_type_id}
              onChange={this.onChangeSocialNetwork}
            >
              {this.optionElements(socialNetworks)}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.defaultProps = {
  data: null,
  disabled: false
};
