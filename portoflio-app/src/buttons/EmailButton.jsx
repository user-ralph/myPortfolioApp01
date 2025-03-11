import React, { useState } from 'react';
import ContactFormModal from '../modalCards/ContactFormModal';
import { motion } from 'framer-motion';
import './EmailButton.css';

const EmailButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.button 
        className="email-button" 
        whileTap={{ scale: 0.95 }} 
        onClick={handleOpenModal}
      >
        Send me an Email
      </motion.button>
      <ContactFormModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default EmailButton;
