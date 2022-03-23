import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/redux";
import { IProduct } from "./../../../../store/products/products.type";
import styles from "./CardItem.module.scss";
import { useAppDispatch } from "./../../../../hooks/redux";
import { addToCart } from "../../../../store/cart/cart.slice";

type ItemPtops = {
  item: IProduct;
};

const CardItem: FC<ItemPtops> = ({ item }) => {
  const cart = useAppSelector((state) => state.cartSlice);
  const productMatching = cart.some((el) => el.id === item.id);
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
  };

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
        <button
          disabled={productMatching}
          onClick={() => !productMatching && addItemToCart()}
        >
          {productMatching ? "Product in Cart" : "Add to Cart"}
        </button>
      </div>
    </li>
  );
};

export default CardItem;
