import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResumeModal from '../modalCards/ResumeModal';
import './ResumeViewButton.css';

const ResumeViewButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="resume-view-button"
      >
        <button className="custom-button" onClick={handleOpen}>
          View Resume
        </button>
      </motion.div>
      <ResumeModal open={open} onClose={handleClose} />
    </>
  );
};

export default ResumeViewButton;