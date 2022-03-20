import { FiShoppingCart, FiUser } from 'react-icons/fi';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <FiShoppingCart />
        </li>
        <li>
          <FiUser />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
