import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Loader.module.css';

export const Loader = (): JSX.Element => {
  const el = document.getElementsByTagName('body')[0];

  return ReactDOM.createPortal(
    <div className={styles.loaderWrapper}>
      <div className={styles.ldsDualRing} />
    </div>,
    el
  );
};
