import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Loader.module.css';

const Loader = (): JSX.Element => {
  const el = document.getElementsByTagName('body')[0];

  return ReactDOM.createPortal(
    <div className={classes.loaderWrapper}>
      <div className={classes.ldsDualRing} />
    </div>,
    el
  );
};

export default Loader;
