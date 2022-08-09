import React from 'react';

import styles from './Button.module.css';

interface IProps {
  buttonText: string;
  buttonOnClickHandler: () => void;
}

const Button: React.FC<IProps> = ({ buttonText, buttonOnClickHandler }) => {
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
