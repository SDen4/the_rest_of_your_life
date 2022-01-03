import React from 'react';
import { useDispatch } from 'react-redux';

import { openForm } from '../../store/MainReducer/actions';

import Button from '../../ui/Button';

import { DisclaimerText } from '../../constants/disclaimer';
import { DisclaimerButtonText } from '../../constants/disclaimer';

import styles from './Disclaimer.module.css';

const Disclaimer = () => {
  const dispatch = useDispatch();

  const buttonOnClickHandler = () => {
    dispatch(openForm(true));
  };

  return (
    <>
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
      <div className={styles.buttonWrapper}>
        <Button
          buttonText={DisclaimerButtonText.rus}
          buttonOnClickHandler={buttonOnClickHandler}
        />
      </div>
    </>
  );
};

export default Disclaimer;
