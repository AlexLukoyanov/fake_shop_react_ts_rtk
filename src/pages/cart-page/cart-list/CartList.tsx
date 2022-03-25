import { useAppSelector } from "../../../hooks/redux";
import CartItem from "./cart-item/CartItem";

const CartList = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div>
      {products.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
