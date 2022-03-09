import React from 'react';

import classes from './Loader.module.css';

const Loader = (): JSX.Element => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.ldsDualRing}></div>
    </div>
  );
};

export default Loader;
