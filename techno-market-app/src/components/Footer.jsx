import React from 'react';
import { FaLinkedin, FaTelegramPlane, FaViber, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={30} />
        </a>
        <a href="https://www.whatsapp.com/?lang=ru" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} />
        </a>
        <a href="https://www.viber.com" target="_blank" rel="noopener noreferrer">
          <FaViber size={30} />
        </a>
      </div>
      <p>
        Контакти:{' '}
        <a href="mailto:info@techno-market.com">info@techno-market.com</a>
      </p>
      <p>
        <a
          href="https://policies.google.com/privacy?hl=uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Політика конфіденційності
        </a>
      </p>
      <p>&copy; 2025 Techno-Market</p>
    </footer>
  );
};

export default Footer;
