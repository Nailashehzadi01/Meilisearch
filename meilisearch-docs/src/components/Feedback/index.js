import React from 'react';
import styles from './feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.feedbackContainer}>
      <p>Was this page helpful?</p>
      <button className={styles.button}>👍 Yes</button>
      <button className={styles.button}>👎 No</button>
    </div>
  );
}
