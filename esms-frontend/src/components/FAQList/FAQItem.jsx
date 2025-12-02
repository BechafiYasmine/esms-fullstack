// esms-frontend/src/components/FAQList/FAQItem.jsx
import React, { useState } from 'react';
import styles from './FAQItem.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

const FAQItem = ({ question, answer, number }) => {
  // Static open state for demonstration, but should be interactive
  const [isOpen, setIsOpen] = useState(false);
  
  const displayQuestion = `${number}_${question}`;
  
  return (
    <div className={styles.faqCard}>
      <button 
        className={styles.questionButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={styles.questionText}>
          {displayQuestion}
        </h3>
        <span className={styles.toggleIcon}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      {isOpen && (
        <p className={styles.answerText}>
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;