import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import NavCartList from "./nav-cart-list/NavCartList";
import styles from "./NavCartBlock.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./../../../../hooks/redux";
import { getTotalPrice } from "../../../../store/cart/cart.slice";

const NavCartBlock = () => {
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products]);

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
