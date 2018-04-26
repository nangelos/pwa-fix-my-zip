import React, { Component } from 'react';
import ImageDetails from './image-details';

class Image extends Component {
  render() {
    return (
      <div className="Camera-component">
        <form>
          <input
            id="image-input"
            accept="image"
            type="file"
            capture="environment"
          />
          <script>
            {/* {const fileInput = document.getElementById('image-input');
    fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));
    } */}
          </script>
          <ImageDetails />
        </form>
      </div>
    );
  }
}

export default Image;
