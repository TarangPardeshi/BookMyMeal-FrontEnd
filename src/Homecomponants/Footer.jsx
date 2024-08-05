/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../Css/Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-block">
          <p>Copyright © 2024 Rishabh Software. All Rights Reserved.</p>
          <div className="social">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
