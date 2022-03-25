import styles from "./CartItem.module.scss";
import { FC } from "react";
import { IProduct } from "./../../../../store/products/products.type";
import { Link } from "react-router-dom";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
type CartItemProps = {
  item: IProduct;
};

const CartItem: FC<CartItemProps> = ({ item }) => {
  return (
    <div className={styles.cart_item}>
      <Link to={`/card/${item.id}`}>
        <img src={item.image} alt="product card" />
      </Link>
      <div className={styles.cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          $ {item.total} x {item.quantity}
        </span>
      </div>
      <div className={styles.cart_count}>
        <div>
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
      </div>

      <button className={styles.cart_delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default CartItem;
