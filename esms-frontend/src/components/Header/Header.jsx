// esms-frontend/src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Hack Escape</div>
            <nav className={styles.nav}>
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#about" className={styles.navLink}>About</a>
                <a href="#sponsors" className={styles.navLink}>Sponsors</a>
                <a href="#agenda" className={styles.navLink}>Agenda</a>
                <a href="#faq" className={styles.navLink}>Contacts</a>
            </nav>
            <button className={styles.btnHeader}>Register</button>
        </header>
    );
};

export default Header;