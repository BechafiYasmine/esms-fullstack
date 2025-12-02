// esms-frontend/src/components/Sponsors/SponsorSection.jsx
import React from 'react';
import styles from './SponsorSection.module.css';

// --- Static Data for Sponsors ---
// Using the simplest public path: files are directly in the /public folder.
const sponsors = [
    { name: 'Sonatrach', logo: '/sonatrach.png' }, 
    { name: 'Condor', logo: '/condor.png' },
    { name: 'Yassir', logo: '/yassir.png' },
    { name: 'Djezzy', logo: '/djezzy.png' },
];
// ----------------------------------

const SponsorSection = () => {
    return (
        <section className={styles.sponsors} id="sponsors">
            
            {/* Curved gradient line: positioned absolutely */}
            <svg className={styles.curveLine} viewBox="0 0 1000 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="sponsorLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#00ffff', stopOpacity: 1}} />
                        <stop offset="30%" style={{stopColor: '#00ff00', stopOpacity: 1}} />
                        <stop offset="70%" style={{stopColor: '#ffcc00', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ff3333', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
                {/* Path starts high (y=10), curves sharply down (Q 100 80), and levels off very low (y=70) */}
                <path d="M 0 10 Q 100 80, 200 70 L 1000 70" 
                      stroke="url(#sponsorLineGradient)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round" />
            </svg>
            
            <div className={styles.titleContainer}>
                <h2 className={styles.sectionTitle}>Sponsors</h2>
            </div>

            {/* Logo Container with the gray box background */}
            <div className={styles.logoBox}>
                <div className={styles.logoContainer}>
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className={styles.sponsorLogo}>
                            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;