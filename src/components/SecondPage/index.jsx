import React from 'react';
import styles from './FollowingDescription.module.css';
import dot from '../../assets/Ellipse 774.png';
import frame from '../../assets/Rectangle 79.png';
import rect1 from '../../assets/Rectangle 77.png';
import rect2 from '../../assets/Rectangle 80.png';

export const SecondPage = ({ isTabletOrMobile }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mar}>
        <div className={styles.left}>
          <div className={styles.text}>
            <p className={styles.title}>Woensdag 12/01</p>
            <div className={styles.box}>
              <div>
                <p>Salade met Serrano</p>
              </div>
              <div className={styles.pop}>
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
              </div>
              <div>
                <p>Steak Tartaar</p>
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div>
            <p className={styles.title}>Donderdag 13/01</p>
            <div className={styles.box}>
              <div>
                <p>Salade met Serrano </p>
              </div>
              <div className={styles.pop}>
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
              </div>
              <div>
                <p>Steak Tartaar</p>
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div>
            <p className={styles.title}>Vrijdag 14/01</p>
            <div className={styles.box}>
              <div>
                <p>Salade met Serrano</p>
              </div>
              <div className={styles.pop}>
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
              </div>
              <div>
                <p>Steak Tartaar</p>
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div>
            <p className={styles.title}>Vrijdag 15/01</p>
            <div className={styles.box}>
              <div>
                <p>Salade met Serrano</p>
              </div>
              <div className={styles.pop}>
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
              </div>
              <div>
                <p>Steak Tartaar</p>
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div>
            <p className={styles.title}>Vrijdag 16/01</p>
            <div className={styles.box}>
              <div>
                <p>Salade met Serrano</p>
              </div>
              <div className={styles.pop}>
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
                <img src={dot} alt='dot' />
              </div>
              <div>
                <p>Steak Tartaar</p>
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
        {!isTabletOrMobile && (
          <div className={styles.right}>
            <img className={styles.frame} src={frame} alt='' />
            <img className={styles.leftWr} src={rect1} alt='' />
            <img className={styles.rightWr} src={rect2} alt='' />
          </div>
        )}
      </div>
    </div>
  );
};
