import React, { Component } from "react";

import api from "../../service/http";
import "./contact-photo.css";
import { ReactComponent as NotPhoto } from "../../icons/not-photo.svg";

class ContactPhoto extends Component {
  state = {
    id: null,
    image_url: null,
    selectedFile: null
  };

  componentDidMount() {
    const { id, image_url } = this.props;
    this.setState({ id, image_url });
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.selectedFile);
    fd.append("id", this.state.id);
    api.contacts.uploadPhoto(fd).then(data => {
      this.setState({
        image_url: data.image_url,
        selectedFile: null
      });
    });
  };

  render() {
    const { image_url, selectedFile } = this.state;
    const avatar = image_url ? (
      <img src={image_url} alt="avatar" className="contact__photo_avatar" />
    ) : (
      <NotPhoto className="contact__photo_avatar" />
    );

    const addPhoto = !selectedFile ? (
      <button
        className="btn text-primary"
        onClick={() => this.fileInput.click()}
      >
        Изменить фото
      </button>
    ) : null;

    const uploadButton = selectedFile ? (
      <button className="btn text-primary" onClick={this.fileUploadHandler}>
        Сохранить
      </button>
    ) : null;

    return (
      <div className="contact__photo text-center">
        {avatar}

        <input
          style={{ display: "none" }}
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        {addPhoto}
        {uploadButton}
      </div>
    );
  }
}

export default ContactPhoto;
