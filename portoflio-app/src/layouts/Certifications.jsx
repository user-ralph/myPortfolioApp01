import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Certifications.css';

import cert1 from '../icons/cert1.jpg';
import cert2 from '../icons/cert2.jpg';
import cert3 from '../icons/cert3.jpg';
import cert4 from '../icons/cert4.jpg';
import cert5 from '../icons/cert5.jpg';

const certificationsData = [
  { image: cert1 },
  { image: cert2 },
  { image: cert3 },
  { image: cert4 },
  { image: cert5 },
];

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const titleControls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false });

  const certificationsControls = useAnimation();
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (titleInView) {
      titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeInOut' } });
    } else {
      titleControls.start({ opacity: 0, y: 20, transition: { duration: 0.45, ease: 'easeInOut' } });
    }
  }, [titleInView, titleControls]);

  useEffect(() => {
    if (certificationsInView) {
      certificationsControls.start({ opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeInOut', delay: 0.3 } });
    } else {
      certificationsControls.start({ opacity: 0, y: 20, transition: { duration: 0.45, ease: 'easeInOut', delay: 0.3 } });
    }
  }, [certificationsInView, certificationsControls]);

  const goNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % certificationsData.length);
  };

  const goPrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + certificationsData.length) % certificationsData.length);
  };

  return (
    <section id="certifications-section" className="certifications-section">
      <motion.h2 ref={titleRef} initial={{ opacity: 0, y: 20 }} animate={titleControls} className="certifications-title">
        My Certifications
      </motion.h2>

      <motion.div ref={certificationsRef} initial={{ opacity: 0, y: 20 }} animate={certificationsControls} className='carousel'>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            className="carousel-item"
          >
            <motion.img
              src={certificationsData[currentSlide].image}
              alt={`Certificate ${currentSlide + 1}`}
              className="carousel-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: 'easeInOut' }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="navigation-container">
          <div className="custom-navigation">
            <button
              onClick={goPrev}
              className="cert-nav-button"
              style={{
                background: currentSlide === 0 ? '#333' : 'white',
                color: currentSlide === 0 ? 'white' : 'black',
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={goNext}
              className="cert-nav-button"
              style={{
                background: currentSlide === certificationsData.length - 1 ? '#333' : 'white',
                color: currentSlide === certificationsData.length - 1 ? 'white' : 'black',
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;