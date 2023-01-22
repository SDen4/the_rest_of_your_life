import React, { FC } from 'react';

import styles from './Button.module.css';

interface IProps {
  buttonText: string;
  buttonOnClickHandler: () => void;
}

export const Button: FC<IProps> = ({ buttonText, buttonOnClickHandler }) => {
  return (
    <button
      type="button"
      onClick={buttonOnClickHandler}
      className={styles.button}
    >
      {buttonText}
    </button>
  );
};
