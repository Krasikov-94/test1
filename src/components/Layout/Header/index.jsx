import logo from '../../../assets/NAAM 1.png';
import styles from './Header.module.css';
import telephone from '../../../assets/Group 4.svg';

export const Header = ({ isTabletOrMobile }) => {
  return (
    <div className={isTabletOrMobile ? styles.wrapperPhone : styles.wrapper}>
      <img className={isTabletOrMobile ? styles.logoPhone : styles.logo} src={logo} alt='logo' />
      {isTabletOrMobile ? (
        ''
      ) : (
        <div className={styles.menuFlex}>
          <div className={styles.menu}>
            <a className={styles.scale} href='#'>
              À la carte
            </a>
            <a className={styles.scale} href=''>
              Wijnkaart
            </a>
            <a className={styles.scale} href='#'>
              Lunchmenu
            </a>
            <a className={styles.scale} href='#'>
              Contact
            </a>
          </div>
          <div className={styles.num}>
            <img className={styles.phone} src={telephone} alt='' />
            <a href='tel:+3292825725'>+32 9 282 57 25</a>
          </div>
        </div>
      )}
    </div>
  );
};
