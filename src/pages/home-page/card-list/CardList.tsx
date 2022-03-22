import { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import CardItem from "./card-item/CardItem";
import styles from "./CardList.module.scss";
import { useAppDispatch } from "./../../../hooks/redux";
import { fetchProducts } from "./../../../store/products/products.slice";

type CardListProps = {
  limitProducts: number;
};

const CardList: FC<CardListProps> = ({ limitProducts }) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(fetchProducts(limitProducts));
  }, [limitProducts]);

  return (
    <ul className={styles.card_list}>
      {products.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CardList;
