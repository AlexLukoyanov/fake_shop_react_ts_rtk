import styles from "./NavCartItem.module.scss";
import { IProduct } from "./../../../../../../store/products/products.type";
import { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

type NavCartItemProps = {
  item: IProduct;
};

const NavCartItem: FC<NavCartItemProps> = ({ item }) => {
  return (
    <div className={styles.nav_cart_item}>
      <Link to={`/card/${item.id}`}>
        {" "}
        <img src={item.image} alt="product card" />
      </Link>
      <div className={styles.nav_cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          $ {item.total} x {item.quantity}
        </span>
      </div>
      <button className={styles.nav_cart_delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default NavCartItem;
