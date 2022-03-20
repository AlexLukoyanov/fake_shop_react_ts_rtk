import styles from './Footer.module.scss';
import { BsGithub, BsTelegram } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.contacts}>
          <span>
            <a href="https://github.com/AlexLukoyanov">
              {' '}
              <BsGithub />
            </a>
          </span>
          <span>
            <a href="https://t.me/Alex_Lukoyanov">
              <BsTelegram />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
