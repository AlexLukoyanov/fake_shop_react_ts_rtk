import styles from "./CartPage.module.scss";
import CartList from "./cart-list/CartList";

const CartPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Cart</h1>
        <CartList />
      </div>
    </div>
  );
};

export default CartPage;
