import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import CardItem from "./card-item/CardItem";
import styles from "./CardList.module.scss";
import { useAppDispatch } from "./../../../hooks/redux";
import { fetchProducts } from "./../../../store/products/products.slice";

const CardList = () => {
  const [limit] = useState(10);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(limit));
  }, [limit]);

  const { products } = useAppSelector((state) => state.productsSlice);
  return (
    <ul className={styles.card_list}>
      {products.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CardList;
