import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h2>I'M RAKESH CHAUDHARY</h2>
      <h2 className="highlight-pink">A DATA ANALYST</h2>
      <div style={{display: 'flex', gap: '20px', alignItems: 'baseline'}}>
         <p className="sub-text"> "I STRIVE TO TURN DATA INTO ACTIONABLE STRATEGY PROBLEM SOLVING, DASHBOARDING"</p>
         <h2 className="highlight-yellow">Coding,</h2>
      </div>
      <h2>HEALTHCARE AND</h2>
      <h2 className="highlight-pink">BUSINESS INTELLIGENCE</h2>
    </section>
  );
};

export default Hero;