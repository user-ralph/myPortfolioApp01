import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import './Header.css';

const HeaderLayout = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const controls = useAnimation();

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      if (isVisible) {
        controls.start({ y: -100, opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } });
        setIsVisible(false);
      }
    } else {
      // Scrolling up
      if (!isVisible) {
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } });
        setIsVisible(true);
      }
    }
    setLastScrollY(window.scrollY);
    setIsDropdownOpen(false); // Close dropdown on scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY, isVisible]);

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } });
  }, [controls]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsDropdownOpen(false); // Close dropdown on link click
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      onHoverStart={() => {
        if (!isVisible) {
          controls.start({ y: 0, opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } });
          setIsVisible(true);
        }
      }}
    >
      <div className="logo">RV Arienza</div>
      <nav className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
        <a href="#welcome-section" onClick={handleLinkClick}>Home</a>
        <a href="#about-me" onClick={handleLinkClick}>About</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
      </nav>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {isDropdownOpen ? <SlArrowUp className='caret-icon' /> : <SlArrowDown className='caret-icon' />}
      </div>
      <a href="#contact-us-section" className="contact-button" onClick={handleLinkClick}>Contact</a>
    </motion.header>
  );
};

export default HeaderLayout;
