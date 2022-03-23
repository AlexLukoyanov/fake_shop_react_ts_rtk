import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "./../../../../store/products/products.type";
import styles from "./CardItem.module.scss";

type ItemPtops = {
  item: IProduct;
};

const CardItem: FC<ItemPtops> = ({ item }) => {
  return (
    <li className={styles.card_item}>
      <Link to={`/card/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <p>$ {item.price}</p>
        <button>Add to Cart</button>
      </div>
    </li>
  );
};

export default CardItem;
