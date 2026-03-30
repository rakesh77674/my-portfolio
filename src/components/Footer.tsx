import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      {/* 1. Attributions (The tiny text in the top right) */}
      <div className="attributions">
        Created by Rakesh Chaudhary<br />
        Built with React & Custom CSS<br />
      </div>

      {/* 2. Main Contact Area */}
      <div>
        <h2 className="collab-text">Let's <span>Collab!</span></h2>
        
        <div className="contact-info">
          <p>Rakesh Chaudhary</p>
          <p>Webster University</p>
          <p>Missouri, USA</p>
          
          <div className="social-icons">
            <a href="https://github.com/rakesh" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/rakesh" target="_blank">LinkedIn</a>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>EMAIL</p>
            <p style={{ color: 'white' }}>rakesh.data@example.com</p>
          </div>
        </div>
      </div>

      {/* 3. Go North Button */}
      <a href="#" onClick={scrollToTop} className="go-north">
        <span style={{ fontSize: '1.5rem' }}>↑</span> Go North
      </a>
    </footer>
  );
};

export default Footer;