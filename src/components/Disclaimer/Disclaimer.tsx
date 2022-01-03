import React from 'react';
import styles from './Disclaimer.module.css';
import { DisclaimerText } from '../../constants/disclaimerText';

const Disclaimer = () => {
  return (
    <div className={styles.disclaimerText}>
      {DisclaimerText.rus.split('.').map((el) => {
        if (!el.length) return null;

        const text = `${el.trim()}.`;

        return (
          <div key={el}>
            <br />
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Disclaimer;
