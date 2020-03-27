import React, { Component } from "react";
// import { NotificationManager } from "react-notifications";
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
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.update(this.props.data);
    }
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
  onChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onFinally = () => {
    this.setState({ loading: false, error: false });
  };

  onSearchContactHandler = () => {
    this.props.onSearchContact(this.state);
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
              name="sn_id"
              value={sn_id}
              disabled={disabled}
              onChange={this.onChangeInput}
            />
            <small
              id="emailHelp"
              className="form-text text-primary contact-form__search-contact"
              onClick={this.onSearchContactHandler}
            >
              Проверить
            </small>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="nickName">Nickname</label>
            <input
              type="text"
              className="form-control"
              id="nickName"
              name="sn_nickname"
              value={sn_nickname}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">ФИО/Кличка</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Полное имя"
            name="sn_name"
            value={sn_name}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="sn_email"
              value={sn_email}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="sn_phone"
              value={sn_phone}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Сеть</label>
            <select
              className="form-control"
              name="sn_type_id"
              value={sn_type_id}
              onChange={this.onChangeInput}
            >
              {this.optionElements(socialNetworks)}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
        {/* <button type="button" className="btn btn-outline-secondary m-2">
          Очистить
        </button> */}
      </form>
    );
  }
}

export default ContactForm;

ContactForm.defaultProps = {
  data: null,
  disabled: false,
  onSearchContact: () => {}
};
