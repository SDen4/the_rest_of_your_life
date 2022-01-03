import React from 'react';

import styles from './Form.module.css';

const Form: React.FC = () => {
  return (
    <form className={styles.formWrapper}>
      <label>Country</label>
      <input type="text" />
    </form>
  );
};

export default Form;
