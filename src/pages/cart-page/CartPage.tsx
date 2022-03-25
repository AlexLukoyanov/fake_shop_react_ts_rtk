import styles from "./CartPage.module.scss";
import CartList from "./cart-list/CartList";
import Checkout from "./checkout/Checkout";

const CartPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Cart</h1>
        <CartList />
        <Checkout />
      </div>
    </div>
  );
};

export default CartPage;
