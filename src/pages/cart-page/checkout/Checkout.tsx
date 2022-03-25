import { useAppSelector } from "../../../hooks/redux";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const { totalPrice } = useAppSelector((state) => state.cartSlice);
  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>Итог:</span> $ {totalPrice.toFixed(2)}
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
