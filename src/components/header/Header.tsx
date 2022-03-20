import { CgShoppingBag } from 'react-icons/cg';
import Nav from './nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <span>
              <CgShoppingBag />
            </span>
            <h1>Fake shop</h1>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
