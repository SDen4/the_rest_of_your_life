import type { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../ui/Button';

import { form } from '../../../store/Search/ducks';

import type { constType } from '../../../model/types';

import { DisclaimerText } from '../../../constants/disclaimer';
import { DisclaimerButtonText } from '../../../constants/disclaimer';

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
