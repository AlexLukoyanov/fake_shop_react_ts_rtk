import { FiShoppingCart, FiUser } from 'react-icons/fi';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <FiShoppingCart />
            <div>4</div>
          </div>
        </li>
        <li>
          <FiUser />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
