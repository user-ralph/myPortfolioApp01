// ViewResumeButton.jsx
import React, { useState } from 'react';
import ResumeModal from '../modalCards/ResumeModal';
import './ViewResumeButton.css'; // Import custom CSS styles

const ViewResumeButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="view-resume-button" onClick={handleOpen}>
        View Resume
      </button>
      <ResumeModal open={open} onClose={handleClose} />
    </>
  );
};

export default ViewResumeButton;
