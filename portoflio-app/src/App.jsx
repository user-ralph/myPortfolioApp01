// src/App.jsx
import React from 'react';
import HeaderLayout from './layouts/Header';
import WelcomeSection from './layouts/WelcomeSection';
import AboutMe from './layouts/AboutMe';
import Certifications from './layouts/Certifications'; // Adjust the import path as needed
import Projects from './layouts/Projects'; // Adjust the import path as needed
import ContactUsSection from './layouts/ContactUsSection'; // Adjust the import path as needed
import FooterPortfolio from './layouts/FooterPortfolio'; // Adjust the import path as needed



function App() {
  return (
    <>
      <HeaderLayout />
      <WelcomeSection />
      <AboutMe />
      <Certifications/>
      <Projects />
      <ContactUsSection/>
      <FooterPortfolio/>
    </>
  );
}

export default App;
