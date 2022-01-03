import React from 'react';

import { formNames, formTitle } from '../../constants/form';

import styles from './Form.module.css';

const Form: React.FC = () => {
  return (
    <>
      <h2>{formTitle.rus}</h2>
      <form className={styles.formWrapper}>
        <label>{formNames.rus}</label>
        <input type="text" />
      </form>
    </>
  );
};

export default Form;
