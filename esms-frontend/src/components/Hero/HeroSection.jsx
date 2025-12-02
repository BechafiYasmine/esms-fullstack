// esms-frontend/src/components/Hero/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import { Terminal } from "lucide-react"; // <-- NEW ICON

const CYBER_KEY_BG = '/cyber_key_bg.png';

const HeroSection = () => {
    return (
        <section className={styles.hero} id="home">
            
            {/* TOP ROW: Hero Left + Terminal Icon */}
            <div className={styles.heroTopRow}>
                
                <div className={styles.heroLeft}>
                    <h1 className={styles.mainTitle}>Hack Escape</h1>
                    <p className={styles.subtitle}>Where Limits End , Cyber Skills Begin !!</p>

                    <div className={styles.eventInfo}>
                        <p className={styles.infoItem}>📅 December 11th-12th</p>
                        <p className={styles.infoItem}>
                            📍 ESI - École nationale supérieure d’informatique, Algiers, Oued Smar
                        </p>
                    </div>

                    <button className={styles.btnRegister}>Register Now</button>
                </div>

                {/* NEW BIG HACKING ICON */}
                <Terminal className={styles.logoIcon} />
            </div>

            {/* RIGHT BOX */}
            <div className={styles.heroRight}>
                <div className={styles.detailsBox}>
                    <h2 className={styles.detailsTitle}>Details:</h2>

                    <p className={styles.detailsText}>
                        HACK ESCAPE is a competitive cybersecurity event designed for students passionate about ethical hacking,
                        information security, and technical challenges. Through a series of progressive challenges, participants
                        will need to analyze, attack, defend, and solve cyber puzzles in order to advance in the game.
                    </p>

                    <p className={styles.detailsText}>
                        The purpose of this event is to allow participants to apply practical cybersecurity skills in a fun and
                        immersive environment, while developing their analytical, defensive, and offensive capabilities.
                        It also encourages teamwork, collaboration, and knowledge sharing among enthusiasts in the field.
                    </p>

                    <p className={styles.esit}>
                        Hack Escape will take place at the National Higher School of Computer Science (ESI).
                    </p>

                    <div className={styles.challengesBox}>+4 Challenges</div>
                </div>
            </div>

            {/* BACKGROUND */}
            <div
                className={styles.heroBg}
                style={{ backgroundImage: `url(${CYBER_KEY_BG})` }}
            ></div>
        </section>
    );
};

export default HeroSection;
