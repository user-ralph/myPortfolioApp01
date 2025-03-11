import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './AboutMe.css';

// Skill data with corresponding image file names
const skills = [
  { name: "HTML", icon: "html.png" },
  { name: "CSS", icon: "css.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "TypeScript", icon: "typescript.png" },
  { name: "React JS", icon: "react.png" },
  { name: "Next JS", icon: "nextjs.png" },
  { name: "Node JS", icon: "nodejs.png" },
  { name: "Tailwind CSS", icon: "tailwind.png" },
  { name: "Firebase", icon: "firebase.png" },
  { name: "Github", icon: "github.png" },
  { name: "Figma", icon: "figma.png" },
  { name: "Canva", icon: "canva.png" }
];

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.section
      id="about-me"
      className="about-me-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.01, ease: 'easeInOut' }}
    >
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I am <span className="highlight-purple">Ralph Vincent Arienza</span>, a
            <span className="highlight-orange"> <i>UI/UX Designer and Front-End Developer</i></span> <span></span>
            crafting seamless, high-performance experiences. With Figma, React, and JavaScript,
            I blend design and code with precision. Every detail is intentional,
            creating seamless, engaging digital experiences that feel effortless yet powerful.
          </p>
        </div>
        <div className="about-me-image">
          <img src="/profilePicture.jpg" alt="Profile" className="about-me-profileimg" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-item"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.05, ease: 'easeInOut', delay: index * 0.1 }}
            >
              <img src={`/src/icons/${skill.icon}`} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
