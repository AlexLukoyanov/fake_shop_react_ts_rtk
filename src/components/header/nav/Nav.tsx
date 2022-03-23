import { FiShoppingCart, FiUser } from "react-icons/fi";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"cart"}>
              {" "}
              <FiShoppingCart />
            </Link>
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
