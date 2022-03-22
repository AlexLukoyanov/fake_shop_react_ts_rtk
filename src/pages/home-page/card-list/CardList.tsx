import { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import CardItem from "./card-item/CardItem";
import styles from "./CardList.module.scss";
import { useAppDispatch } from "./../../../hooks/redux";
import { fetchProducts } from "./../../../store/products/products.slice";
import { fetchFilteredProducts } from "./../../../store/products/filtered.products.slice";
import Loader from "../../../components/ui/loader/Loader";

type CardListProps = {
  limitProducts: number;
};

const CardList: FC<CardListProps> = ({ limitProducts }) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsSlice);
  const { filteredProducts, isLoading } = useAppSelector(
    (state) => state.filteredProductsSlice
  );
  const category = useAppSelector((state) => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchProducts(limitProducts));
    dispatch(fetchFilteredProducts(category.toLowerCase()));
  }, [limitProducts, category, dispatch]);

  return (
    <ul className={styles.card_list}>
      {category === "" ? (
        products.map((item) => <CardItem key={item.id} item={item} />)
      ) : !isLoading ? (
        <Loader />
      ) : (
        filteredProducts.map((item) => <CardItem key={item.id} item={item} />)
      )}
    </ul>
  );
};

export default CardList;
