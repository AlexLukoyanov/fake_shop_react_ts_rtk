import { useAppSelector } from "../../../hooks/redux";
import styles from "./Checkout.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";

const Checkout = () => {
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products]);
  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>Total:</span> $ {totalPrice.toFixed(2)}
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
