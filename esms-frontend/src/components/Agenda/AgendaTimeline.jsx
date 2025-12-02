// esms-frontend/src/components/Agenda/AgendaTimeline.jsx
import React from 'react';
import styles from './AgendaTimeline.module.css';

// Static Data based exactly on image_39d3dc.png and the specified color sequence
const agendaData = [
    // --- DAY 1 ---
    { id: 1, day: 1, time: '08:00-09:00', event: 'CHECK IN', checkpointColor: 'red' }, 
    { id: 2, day: 1, time: '09:00-10:00', event: 'Opening Ceremony', checkpointColor: 'blue' }, 
    { id: 3, day: 1, time: '10:00-12:00', event: 'Challenge 1: Code Breaking', checkpointColor: 'yellow' }, 
    { id: 4, day: 1, time: '12:00-14:00', event: 'Lunch Break', checkpointColor: 'red' }, 
    { id: 5, day: 1, time: '14:00-16:00', event: 'Challenge 2: System Attack', checkpointColor: 'blue' }, 
    { id: 6, day: 1, time: '16:00-16:30', event: 'Coffee Break & Activities', checkpointColor: 'yellow' }, 

    // --- DAY 2 ---
    { id: 7, day: 2, time: '08:00-09:00', event: 'Challenge 3: Hack & Defend', checkpointColor: 'red' }, // You specified RED for this one
    { id: 8, day: 2, time: '10:00-12:30', event: 'Final Combination', checkpointColor: 'yellow' }, 
    { id: 9, day: 2, time: '12:00-14:30', event: 'Lunch Break', checkpointColor: 'blue' }, 
    { id: 10, day: 2, time: '16:00', event: 'Winner Announcement', checkpointColor: 'red' }, 
];

const AgendaTimeline = () => {
    const day1 = agendaData.filter(item => item.day === 1);
    const day2 = agendaData.filter(item => item.day === 2);

    const renderEvents = (events) => (
        <div className={styles.dayColumn}>
            {events.map((item, index) => (
                <div key={item.id} className={styles.timelineItem}>
                    {/* The checkpointColor class is also passed to the eventBox for the border color */}
                    <div className={`${styles.eventBox} ${styles[item.checkpointColor]}`}>
                        <p className={styles.eventTime}>{item.time}</p>
                        <p className={styles.eventName}>{item.event}</p>
                    </div>
                    {/* Applying dynamic class for checkpoint color */}
                    <div className={`${styles.checkpoint} ${styles[item.checkpointColor]}`}></div>
                </div>
            ))}
        </div>
    );

    return (
        <section className={styles.agenda} id="agenda">
            <h2 className={styles.sectionTitle}>AGENDA</h2>
            <div className={styles.timelineContainer}>
                <div className={styles.timelineGrid}>
                    {/* Day 1 Column */}
                    <div>
                        <div className={styles.dayHeaderContainer}>
                            <h3 className={`${styles.dayTitle} ${styles.day1}`}>DAY 1</h3>
                        </div>
                        {renderEvents(day1)}
                    </div>
                    
                    {/* Day 2 Column */}
                    <div>
                        <div className={styles.dayHeaderContainer}>
                            <h3 className={`${styles.dayTitle} ${styles.day2}`}>DAY 2</h3>
                        </div>
                        {renderEvents(day2)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgendaTimeline;