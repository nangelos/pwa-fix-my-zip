import React, { Component } from 'react';
import ImageDetails from './image-details';
import { Link } from 'react-router';
import Camera from './camera';

class Image extends Component {
  constructor() {
    super();
    this.state = {
      image: {},
      issueType: '',
      issueDescription: '',
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
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submit was pressed');
  };

  render() {
    return (
      <div className="Camera-component">
        <form onSubmit={this.handleSubmit}>
          <Camera handleImageChange={this.handleImageChange} />
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
