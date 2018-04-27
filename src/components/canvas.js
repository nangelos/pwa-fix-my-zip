import React, { Component } from 'react';
import logo from '../styles/logo.png';

class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" id="viewport" />
        <img ref="image" src={logo} alt="some pic" hidden="true" />
      </div>
    );
  }
}
export default Canvas;
