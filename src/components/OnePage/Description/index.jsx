import React from 'react';
import styles from './Description.module.css';

export const Description = ({ isTabletOrMobile }) => {
  return (
    <>
      <p className={isTabletOrMobile ? styles.oneTextPhone : styles.oneText}>
        OPEN EVERYDAY 6AM - 9PM
      </p>
      <p className={isTabletOrMobile ? styles.twoTextPhone : styles.twoText}>
        A bad day with lunch is better than a good day without it.
      </p>
    </>
  );
};
