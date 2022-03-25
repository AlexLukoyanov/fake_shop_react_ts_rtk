import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./../../hooks/redux";
import { fetchProduct } from "./../../store/products/product.slice";
import Loader from "./../../components/ui/loader/Loader";
import styles from "./CardPage.module.scss";
import { addToCart } from "../../store/cart/cart.slice";

const CardPage = () => {
  const { id } = useParams();
  const number = Number(id);
  const dispatch = useAppDispatch();
  const { product, isLoading } = useAppSelector((state) => state.productSlice);
  const { products } = useAppSelector((state) => state.cartSlice);
  const productMatching = products.some((el) => el.id === product.id);

  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

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
              <button
                disabled={productMatching}
                onClick={() => !productMatching && addItemToCart()}
              >
                {productMatching ? "Product in Cart" : "Add to Cart"}
              </button>

              <Link to={"/cart"}>Go to Cart</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPage;
