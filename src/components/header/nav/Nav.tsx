import { FiShoppingCart, FiUser } from "react-icons/fi";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import NavCartBlock from "./nav-cart-block/NavCartBlock";
import { useAppSelector } from "../../../hooks/redux";

const Nav = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"cart"}>
              {" "}
              <FiShoppingCart />
            </Link>
            {products.length > 0 && <b>{products.length}</b>}
            {products.length > 0 && (
              <span className={styles.nav_hover_cart}>
                <NavCartBlock />
              </span>
            )}
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
