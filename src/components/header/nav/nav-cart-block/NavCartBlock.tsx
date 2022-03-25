import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import NavCartList from "./nav-cart-list/NavCartList";
import styles from "./NavCartBlock.module.scss";

const NavCartBlock = () => {
  const { totalPrice } = useAppSelector((state) => state.cartSlice);
  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <p>Total: $ {totalPrice.toFixed(2)}</p>
      </div>
      <div className={styles.nav_cart_link}>
        <Link to={"cart"}> Go to Cart </Link>
      </div>
    </div>
  );
};

export default NavCartBlock;
