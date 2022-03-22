import { useAppSelector } from "../../../hooks/redux";
import styles from "./CountProducts.module.scss";

const CountProducts = () => {
  const { products, isLoading } = useAppSelector(
    (state) => state.productsSlice
  );
  const { filteredProducts } = useAppSelector(
    (state) => state.filteredProductsSlice
  );
  const category = useAppSelector((state) => state.categoriesSlice);

  return (
    <div className={styles.count_products}>
      {isLoading && (
        <p>
          Showing: {category === "" ? products.length : filteredProducts.length}{" "}
          of {category === "" ? 20 : filteredProducts.length} items{" "}
        </p>
      )}
    </div>
  );
};

export default CountProducts;
