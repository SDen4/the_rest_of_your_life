import React from 'react';
import { useDispatch } from 'react-redux';

import { openForm } from '../../store/MainReducer/actions';

import Button from '../../ui/Button';

import { DisclaimerText } from '../../constants/disclaimer';
import { DisclaimerButtonText } from '../../constants/disclaimer';

import { IDisclaimer } from './types';

import styles from './Disclaimer.module.css';

const Disclaimer: React.FC<IDisclaimer> = ({ lang }) => {
  const dispatch = useDispatch();

  const buttonOnClickHandler = () => {
    dispatch(openForm(true));
  };

  return (
    <>
      <div className={styles.disclaimerText}>
        <div>
          <p>{DisclaimerText[lang]}</p>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          buttonText={DisclaimerButtonText[lang]}
          buttonOnClickHandler={buttonOnClickHandler}
        />
      </div>
    </>
  );
};

export default Disclaimer;
