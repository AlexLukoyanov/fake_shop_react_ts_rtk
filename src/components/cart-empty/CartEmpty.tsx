import { Link } from "react-router-dom";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.cart_empry}>
      <img src="img/empty_cart.png" alt="cart empty" />
      <h1>Your Cart is Empty </h1>
      <p>Add something to Cart</p>
      <Link to={"/"}> Continue shoping </Link>
    </div>
  );
};

export default CartEmpty;
