import React from 'react';

import { IButton } from './types';

import styles from './Button.module.css';

const Button: React.FC<IButton> = ({ buttonText, buttonOnClickHandler }) => {
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

export default Button;
