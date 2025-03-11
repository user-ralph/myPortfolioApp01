// WelcomeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WelcomeSection.css';
import ViewResumeButton from '../buttons/ViewResumeButton';
import ContactUsButton from '../buttons/ContactUsButton';

const WelcomeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="welcome-section" className="welcome-section" ref={ref}>
      <div className="content-wrapper">
        <motion.div
          className="welcome-card"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
        >
          <span className="premium-badge">PREMIUM</span>
          <p className="intro-text">Hello, I am</p>
          <h1 className="name">RALPH VINCENT ARIENZA</h1>
          <p className="roles">UI/UX Designer | Front-End Developer</p>
        </motion.div>

        <motion.div
          className="buttons-container"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <ViewResumeButton />
          <ContactUsButton />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
