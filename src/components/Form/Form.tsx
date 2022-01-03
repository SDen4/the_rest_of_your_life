import React from 'react';

import { formNames } from '../../constants/form';

import styles from './Form.module.css';

const Form: React.FC = () => {
  return (
    <form className={styles.formWrapper}>
      <label>{formNames.rus}</label>
      <input type="text" />
    </form>
  );
};

export default Form;
