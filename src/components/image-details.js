import React from 'react';

const ImageDetails = props => {
  return (
    <div>
      <select name="issueType" onChange={props.handleSelectChange}>
        <option>Select One</option>
        <option>Pothole</option>
        <option>Street Light</option>
        <option>Traffic Light</option>
      </select>
      <p>Add any additional details here:</p>
      <textarea
        name="issueDescription"
        id="issue-description"
        onChange={props.handleTextChange}
      />
    </div>
  );
};

export default ImageDetails;
