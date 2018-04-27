import React, { Component } from 'react';
import ImageDetails from './image-details';
import { Link } from 'react-router';
import Camera from './camera';
import Canvas from './canvas';
import GPS from './gps';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      image: {},
      issueType: '',
      issueDescription: '',
      coords: [],
    };
  }

  handleTextChange = event => {
    let { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleImageChange = event => {
    let { files } = event.target;
    console.log(files);
    this.setState({ image: files });
    // const canvas = document.getElementById('viewport');
    // if (canvas.getContext) {
    //   const ctx = canvas.getContext('2d');
    //   return document.getElementById('image-input');
    // }
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.coords);
    console.log('Submit was pressed');
  };

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

  componentDidMount() {
    this.getLocation();
  }

  render() {
    console.log(this.state);
    return (
      <div className="Camera-component">
        <form onSubmit={this.handleSubmit}>
          <Camera handleImageChange={this.handleImageChange} />
          {/* <canvas id="viewport" /> */}
          <Canvas />
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
