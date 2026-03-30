import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      {/* 1. The Sidebar Vertical Text */}
      <div className="vertical-label">
        WHO AM I? ↓
      </div>

      {/* 2. The Main Content */}
      <div className="about-content">
        <h2 className="about-header">
          I am <span>ready to work</span>
        </h2>
        
        <p className="about-description">
          I will help you reach out the <strong>best potential</strong> of your 
          business by providing users with best user <strong>experience</strong> and design.
        </p>

        <p className="about-description">
          As a Healthcare Data Analyst, I bridge the gap between complex clinical 
          datasets and actionable business intelligence.
        </p>

        <a href="#projects" className="about-link">
          View my projects →
        </a>
      </div>
    </section>
  );
};

export default About;