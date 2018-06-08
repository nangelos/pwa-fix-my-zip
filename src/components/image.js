import React, { Component } from 'react';
import logo from '../styles/logo.png';
import ImageDetails from './image-details';
import { Link } from 'react-router-dom';
import Camera from './image-camera';
import { addIssue } from '../reducers/issues';
import { connect } from 'react-redux';
import IssueResponse from './issue-response';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      image: {},
      imagePreviewUrl: '',
      issueType: '',
      issueDescription: '',
      coords: [],
      submitted: false,
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
    this.setState({ [name]: value });
  };

  handleSelectChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase().replace(' ', '-') });
  };

  handleImageChange = event => {
    this.setState({ disabled: true });
    this.getLocation();
    const reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result,
        disabled: false,
      });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      image,
      imagePreviewUrl,
      issueType,
      issueDescription,
      coords,
    } = this.state;
    this.props.createIssue({
      image,
      imagePreviewUrl,
      issueType,
      issueDescription,
      latitude: coords[0],
      longitude: coords[1],
    });
    this.setState({ submitted: true })
  };

  render() {
    let { imagePreviewUrl, disabled, submitted } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl)
      $imagePreview = (
        <img src={imagePreviewUrl} alt={logo} id="imagePreview" />
      );
    return (
      <div className="Camera-component">
        {
          !submitted ?
            <div>
              <form onSubmit={this.handleSubmit}>
                <Camera handleImageChange={this.handleImageChange} />
                {$imagePreview}
                <ImageDetails
                  handleTextChange={this.handleTextChange}
                  handleSelectChange={this.handleSelectChange}
                />
                <button type="submit" disabled={disabled}>
                  Submit
          </button>
              </form>
              <br />
              <Link to="/">Back</Link>
            </div>
            :
            <IssueResponse />
        }
      </div>
    );
  }
}
const mapDispatch = dispatch => ({
  createIssue: issue => dispatch(addIssue(issue)),
});

export default connect(null, mapDispatch)(Image);
