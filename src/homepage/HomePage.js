// src/components/HomePage.js
import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import HomeSection from '../home/HomeSection';
import AboutSection from '../about/AboutSection';
import ContactSection from '../contact/ContactSection';
import Faq from '../faq/Faq';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'faq':
          return <Faq />;  
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="content">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
