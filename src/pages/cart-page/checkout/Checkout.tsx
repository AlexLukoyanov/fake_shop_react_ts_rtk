import { useAppSelector } from "../../../hooks/redux";
import styles from "./Checkout.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";
import { postOrder } from "./../../../store/cart/cart.slice";
import { Link } from "react-router-dom";
import { useAuth } from "./../../../hooks/useAuth";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cartSlice);

  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart]);

  const sendOrder = () => {
    dispatch(postOrder(cart));
  };
  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>Total:</span> $ {cart.totalPrice.toFixed(2)}
        </p>
        {isAuth ? (
          <button
            className={styles.checkout_button}
            onClick={() => sendOrder()}
          >
            Checkout
          </button>
        ) : (
          <Link className={styles.checkout_button} to={"/login"}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
