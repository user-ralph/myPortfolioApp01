// ContactUsSection.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ContactUsSection.css';
import { BiLogoGmail } from 'react-icons/bi';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import ResumeViewButton from '../buttons/ResumeViewButton';
import EmailButton from '../buttons/EmailButton'; // Import the EmailButton component

const ContactUsSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.8,
        y: 50,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    }
  }, [inView, controls]);

  return (
    <section id="contact-us-section" className="contact-us-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={controls}
        className="contact-us-card"
      >
        <motion.h2
          className="contact-us-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeInOut' } }}
        >
          Let's Create Something Great
        </motion.h2>
        <motion.p
          className="contact-us-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeInOut', delay: 0.2 } }}
        >
          Every big idea starts with a conversation. Let's build something extraordinary.
        </motion.p>
        <motion.div
          className="contact-us-information"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeInOut', delay: 0.4 } }}
        >
          <motion.div className="contact-item" transition={{ type: 'spring', stiffness: 200 }}>
            <BiLogoGmail className="contact-icon" />
            <a href="mailto:work.rvarienza@gmail.com">work.rvarienza@gmail.com</a>
          </motion.div>
          <motion.div className="contact-item" transition={{ type: 'spring', stiffness: 200 }}>
            <DiGithubBadge className="contact-icon" />
            <a href="https://github.com/user-ralph" target="_blank" rel="noopener noreferrer">
              github.com/user-ralph
            </a>
          </motion.div>
          <motion.div className="contact-item" transition={{ type: 'spring', stiffness: 200 }}>
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/ralph-vincent-arienza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ralph Vincent Arienza
            </a>
          </motion.div>
          <motion.div className="contact-item" transition={{ type: 'spring', stiffness: 200 }}>
            <FaInstagram className="contact-icon" />
            <a href="https://www.instagram.com/ralphie.02" target="_blank" rel="noopener noreferrer">
              instagram.com/ralphie.02
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="contact-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeInOut', delay: 0.6 } }}
        >
          <ResumeViewButton />
          <EmailButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUsSection;
