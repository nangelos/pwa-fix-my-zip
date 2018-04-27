import React from 'react';

const Camera = props => {
  return (
    <div className="Camera-component">
      <input
        onChange={props.handleImageChange}
        id="image-input"
        accept="image"
        type="file"
        capture="environment"
      />
    </div>
  );
};

export default Camera;
