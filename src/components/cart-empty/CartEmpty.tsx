import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./CartEmpty.module.scss";

type CartEmptyProps = {
  title: string;
};

const CartEmpty: FC<CartEmptyProps> = ({ title }) => {
  return (
    <div className={styles.cart_empry}>
      <img src="img/empty_cart.png" alt="cart empty" />
      <h1>Your {title} is empty </h1>
      <p>Add something to {title}</p>
      <Link to={"/"}> Continue shoping </Link>
    </div>
  );
};

export default CartEmpty;
