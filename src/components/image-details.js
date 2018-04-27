import React from 'react';

const ImageDetails = props => {
  return (
    <div onChange={props.handleTextChange}>
      <select name="issueType">
        <option>Select One</option>
        <option>Pothole</option>
        <option>Street Light</option>
        <option>Traffic Light</option>
      </select>
      <p>Add any additional details here:</p>
      <textarea name="issueDescription" id="issue-description" />
    </div>
  );
};

export default ImageDetails;
