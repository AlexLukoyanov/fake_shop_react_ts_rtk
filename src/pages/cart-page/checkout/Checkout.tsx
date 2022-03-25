import { useAppSelector } from "../../../hooks/redux";
import styles from "./Checkout.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";
import { postOrder } from "./../../../store/cart/cart.slice";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();
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
        <button onClick={() => sendOrder()}>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
