import React from 'react';
import styles from './menu.module.css';
import img1 from '../../assets/Image.png';
import img2 from '../../assets/Image1.png';
import img3 from '../../assets/Image2.png';

export const Menu = () => {
  return (
    <div className={styles.general}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p>LEKKER ETEN</p>
          <div className={styles.line}></div>
          <p>
            Eten gaat niet over indruk maken op mensen. Het gaat erom dat ze zich op hun gemak
            voelen. Dat is onze filosofie, goed eten in een goede sfeer.
          </p>
        </div>
        <div className={styles.right}>
          <img src={img1} alt='' />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <img src={img2} alt='' />
        </div>
        <div className={styles.left}>
          <p>TOFFE AMBIANCE</p>
          <div className={styles.line}></div>
          <p>
            Het creëren van de juiste sfeer is zeer belangrijk voor ons. We nemen onze tijd om te
            zorgen dat alle elementen bijdragen aan de juiste setting.
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p>LEKKERE COCKTAILS</p>
          <div className={styles.line}></div>
          <p>
            Ons doel is simpel: een gastvrije plek bieden waar u kunt genieten van een
            onvergetelijke cocktail, een goed gesprek en lekker eten.
          </p>
        </div>
        <div className={styles.right}>
          <img src={img3} alt='' />
        </div>
      </div>
    </div>
  );
};
