// ContactUsButton.jsx
import React, { useState } from 'react';
import ContactFormModal from '../modalCards/ContactFormModal';
import './ContactUsButton.css';

const ContactUsButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <button className="contact-us-button" onClick={handleOpenModal}>
        Contact Us
      </button>
      <ContactFormModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ContactUsButton;
