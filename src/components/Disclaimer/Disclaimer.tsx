import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';

import { DisclaimerText } from '../../constants/disclaimer';
import { DisclaimerButtonText } from '../../constants/disclaimer';

import { IDisclaimer } from './types';

import styles from './Disclaimer.module.css';
import { form } from '../../store/Search/ducks';

const Disclaimer: React.FC<IDisclaimer> = ({ lang }) => {
  const dispatch = useDispatch();

  const buttonOnClickHandler = () => {
    dispatch(form(true));
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
