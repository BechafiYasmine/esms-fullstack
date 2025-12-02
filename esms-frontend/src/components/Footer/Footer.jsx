// esms-frontend/src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { Youtube, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.questionText}>STILL HAVE A QUESTIONS ABOUT</p>
      
      <div className={styles.logoContainer}>
        {/* Simulating the lightbulb icon */}
        <span className={styles.logoIcon}>💡</span> 
        <span className={styles.logoText}>Hack Escape</span>
      </div>

      <div className={styles.contactInfo}>
        <h3 className={styles.contactHeader}>CONTACT US</h3>
        <p className={styles.contactDetails}>by email <span className={styles.emailLink}>cse@esi.dz</span> or on social media</p>
      </div>

      <div className={styles.socialLinks}>
        {/* Social Icons based on image_17e5bd.png */}
        <a href="#" className={styles.socialIcon}><Youtube size={32} /></a>
        <a href="#" className={styles.socialIcon}><Facebook size={32} /></a>
        <a href="#" className={styles.socialIcon}><Linkedin size={32} /></a>
        <a href="#" className={styles.socialIcon}><Instagram size={32} /></a>
        <a href="#" className={styles.socialIcon}><Twitter size={32} /></a>
      </div>
    </footer>
  );
};

export default Footer;