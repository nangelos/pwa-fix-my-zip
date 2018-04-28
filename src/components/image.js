import React, { Component } from 'react';
import logo from '../styles/logo.png';
import ImageDetails from './image-details';
import { Link } from 'react-router';
import Camera from './image-camera';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      image: {},
      imagePreviewUrl: '',
      issueType: '',
      issueDescription: '',
      coords: [],
    };
  }

  getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          coords: [
            parseFloat(longitude.toFixed(5)),
            parseFloat(latitude.toFixed(5)),
          ],
        });
      });
    }
  };

  handleTextChange = event => {
    let { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleImageChange = event => {
    this.getLocation();
    const reader = new FileReader();
    let file = event.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({ image: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submit was pressed');
  };

  // componentDidMount() {
  //   this.getLocation();
  // }

  render() {
    console.log(this.state);
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl)
      $imagePreview = (
        <img src={imagePreviewUrl} alt={logo} id="imagePreview" />
      );
    return (
      <div className="Camera-component">
        <form onSubmit={this.handleSubmit}>
          <Camera handleImageChange={this.handleImageChange} />
          {$imagePreview}
          <ImageDetails handleTextChange={this.handleTextChange} />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Image;
