// esms-frontend/src/components/FAQList/FAQList.jsx
import React from 'react';
import styles from './FAQList.module.css';
import FAQItem from './FAQItem'; 

// Static Data based on image_39d2e7.png
const staticFaqs = [
  { id: 1, order: 1, question: 'What is HACK ESCAPE event ?', answer: 'HACK ESCAPE is a competitive cybersecurity event where students solve progressive challenges in cryptography, system exploitation, defense, and ethical hacking.' },
  { id: 2, order: 2, question: 'Who can participate in HACK ESCAPE ?', answer: 'HACK ESCAPE is a competitive cybersecurity event where students solve progressive challenges in cryptography. The event is open to students passionate about cybersecurity, ethical hacking, or computer science, regardless of their level. System exploitation, defense, and ethical hacking skills are relevant.' },
  { id: 3, order: 3, question: 'How does the competition work?', answer: 'Participants from teams move through 4 challenges: CODE BREAKING, SYSTEM ATTACK, HACK & DEFEND, and THE FINAL COMBINATION. Each stage must be completed to unlock the next.' },
  { id: 4, order: 4, question: 'How many members are allowed per team ?', answer: 'Each team consists of 5 members. The number of participating teams is limited.' },
  { id: 5, order: 5, question: 'What skills i need to join ?', answer: 'You don\'t need to be an expert. Basic knowledge in cybersecurity, logic, or programming is helpful, but learning during the event is encouraged.' },
  { id: 6, order: 6, question: 'How are teams evaluated and the winners determined ?', answer: 'Teams are evaluated based on their performance in each challenge: the speed of solving tasks, the accuracy of their solutions, and the effectiveness of their attack or defense strategies. The team that demonstrates the strongest overall cybersecurity skills and completes the challenges with the highest score is declared the winner.' },
];

const FAQList = () => {
  return (
    <div className={styles.faqSection}>
      <div className={styles.listContainer}>
        {staticFaqs.map(faq => (
          <FAQItem 
            key={faq.id} 
            question={faq.question} 
            answer={faq.answer} 
            number={faq.order} 
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;