import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ type }) => {
  return (
    <button type={type} className="submit-button">
      Submit
    </button>
  );
};

export default SubmitButton;
