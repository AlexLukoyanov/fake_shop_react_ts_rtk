import { useAppSelector } from "../../../hooks/redux";
import styles from "./CountProducts.module.scss";

const CountProducts = () => {
  const { products } = useAppSelector((state) => state.productsSlice);

  return (
    <div className={styles.count_products}>
      <p>Showing: {products.length} of 20 items </p>
    </div>
  );
};

export default CountProducts;
