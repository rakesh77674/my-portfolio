import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="custom-navbar">
      <div className="signature-logo">
        Rakesh <br /> 
        <span style={{ paddingLeft: '20px' }}>Chaudhary</span>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
        </ul>
        <button className="download-cv-btn">DOWNLOAD CV</button>
      </div>
    </nav>
  );
};

export default Navbar;