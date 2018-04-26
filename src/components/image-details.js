import React from 'react';

const ImageDetails = () => {
  return (
    <div>
      <select>
        <option>Select One</option>
        <option>Pothole</option>
        <option>Street Light</option>
        <option>Traffic Light</option>
      </select>
      <p>Add any additional details here:</p>
      <textarea id="issue-description" />
    </div>
  );
};

export default ImageDetails;
