import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={showFooter ? styles.showFooter : styles.hideFooter}>
      <div>
        <h3>Contact</h3>
        <br />
        <p>Supercoffeeroad 223b</p>
        <p>92230 New Coffeland</p>
        <p>Phone: 22331122</p>
        <p>Mail: <a href="mailto:coffeeland@info.com">coffeeland@info.com</a></p>
      </div>

      <div>
        <h3>Legal</h3>
        <br />
        <p>
          <a href="https://your-cookie-link.com" target="_blank" rel="noopener noreferrer">
            Cookie policy
          </a>
        </p>
        <p>
          <a href="https://your-return-link.com" target="_blank" rel="noopener noreferrer">
            Return policy
          </a>
        </p>
        <p>
          <a href="https://your-shipping-link.com" target="_blank" rel="noopener noreferrer">
            Shipping
          </a>
        </p>
        <p>
          <a href="https://your-terms-link.com" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
        </p>
      </div>

      <div>
        <h3>About</h3>
        <br />
        <p>History</p>
        <p>The people behind</p>
        <p>Partnerships</p>
        <p>International</p>
      </div>
    </footer>
  );
};

export default Footer;
