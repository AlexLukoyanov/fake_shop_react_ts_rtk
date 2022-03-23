import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./../../hooks/redux";
import { fetchProduct } from "./../../store/products/product.slice";
import Loader from "./../../components/ui/loader/Loader";
import styles from "./CardPage.module.scss";

const CardPage = () => {
  const { id } = useParams();
  const number = Number(id);
  const dispatch = useAppDispatch();
  const { product, isLoading } = useAppSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(fetchProduct(number));
  }, []);
  return (
    <div className="page">
      {!isLoading ? (
        <Loader />
      ) : (
        <div className={styles.card_wrapper}>
          <div className={styles.card_img}>
            <img src={product.image} alt="product card" />
          </div>
          <div className={styles.card_description}>
            <h3>{product.category}</h3>
            <h1>{product.title}</h1>

            <h4> $ {product.price}</h4>
            <p>{product.description}</p>
            <div>
              <button>Add to Cart</button>
              <button>Go to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPage;
