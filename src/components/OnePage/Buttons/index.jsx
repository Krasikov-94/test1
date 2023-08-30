import React from 'react';
import styles from './Buttons.module.css';

export const Buttons = ({ handleOpenModal, isTabletOrMobile }) => {
  return (
    <div className={isTabletOrMobile ? styles.wrapperPhone : styles.wrapper}>
      <div className={isTabletOrMobile ? styles.leftPhone : styles.left}>
        <button onClick={() => handleOpenModal()}>Reserve a table</button>
      </div>
      <div className={isTabletOrMobile ? styles.rightPhone : styles.right}>
        <button>Fb</button>
        <button>lg</button>
        <button>Tw</button>
        <button>Yt</button>
      </div>
    </div>
  );
};
