import React from 'react';

const SocialPage: React.FC = () => {
  return (
    <section className="social-only-section">
      <div className="social-sidebar-container">
        <p className="social-header">FIND ME ALSO ON</p>
        <ul className="social-list">
          <li>
            <a href="https://www.linkedin.com/in/rakesh-chaudhary-25845a19a/" target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://github.com/rakesh77674" target="_blank" rel="noreferrer">
              GITHUB
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rrakesh.chaudhary/" target="_blank" rel="noreferrer">
              FACEBOOK
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SocialPage;