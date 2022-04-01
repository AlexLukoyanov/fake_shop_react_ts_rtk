import { FiLogIn, FiShoppingCart, FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import NavCartBlock from "./nav-cart-block/NavCartBlock";
import { useAppSelector } from "../../../hooks/redux";
import { useAuth } from "./../../../hooks/useAuth";
import { useAppDispatch } from "./../../../hooks/redux";
import { removeUser } from "../../../store/user/userSlice";
import { removeUserId } from "../../../store/cart/cart.slice";
import { useEffect } from "react";
import { fetchOrder } from "./../../../store/order/orderSlice";

const Nav = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  const { order } = useAppSelector((state) => state.orderSlice);
  const { isAuth, id } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id, dispatch]);

  const handleSignOut = () => {
    dispatch(removeUser());
    dispatch(removeUserId());
  };

  const handleKeyDown: React.KeyboardEventHandler<SVGElement> = (e) => {
    if (e.key === "Enter") {
      dispatch(removeUser());
      dispatch(removeUserId());
    }
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={"cart"}>
              {" "}
              <FiShoppingCart />
            </Link>
            {products.length > 0 && <b>{products.length}</b>}
            {products.length > 0 && (
              <span className={styles.nav_hover_cart}>
                <NavCartBlock />
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            {isAuth && (
              <Link to={"/order"}>
                {" "}
                <FiUser title="Orders" />
              </Link>
            )}
            {order.length > 0 && <b>{order.length}</b>}
          </div>
        </li>
        <li>
          {isAuth ? (
            <GoSignOut
              className={styles.nav_sign_out}
              title="Sign out"
              onClick={handleSignOut}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            />
          ) : (
            <Link to={"/login"}>
              <FiLogIn title="Sign in" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
