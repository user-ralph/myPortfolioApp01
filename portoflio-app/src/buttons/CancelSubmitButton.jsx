import React from 'react';
import './CancelSubmitButton.css';

const CancelSubmitButton = ({ onClick }) => {
  return (
    <button className="cancel-submit-button" onClick={onClick}>
      Cancel
    </button>
  );
};

export default CancelSubmitButton;
