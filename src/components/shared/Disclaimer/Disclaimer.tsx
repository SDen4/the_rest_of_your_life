import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../ui/Button';
import { DisclaimerText } from '../../../constants/disclaimer';
import { DisclaimerButtonText } from '../../../constants/disclaimer';

import { form } from '../../../store/Search/ducks';

import { constType } from '../../../model/types';

import styles from './styles.module.css';

interface IProps {
  lang: keyof constType;
}

export const Disclaimer: FC<IProps> = ({ lang }) => {
  const dispatch = useDispatch();

  const buttonOnClickHandler = () => {
    dispatch(form(true));
  };

  return (
    <>
      <div className={styles.disclaimerText}>
        <p>{DisclaimerText[lang]}</p>
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
