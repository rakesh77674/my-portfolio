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
        <a 
          href="/Rakesh_Chaudhary_Resume.docx" 
          download="Rakesh_Chaudhary_Resume.docx" 
          className="download-cv-btn"
        >
          DOWNLOAD CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;