import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';

import { DisclaimerText } from '../../constants/disclaimer';
import { DisclaimerButtonText } from '../../constants/disclaimer';

import styles from './Disclaimer.module.css';
import { form } from '../../store/Search/ducks';

interface IProps {
  lang: string;
}

const Disclaimer: React.FC<IProps> = ({ lang }) => {
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

export default memo(Disclaimer);
