import { useAppSelector } from "../../../hooks/redux";
import { useAuth } from "./../../../hooks/useAuth";
import { useAppDispatch } from "./../../../hooks/redux";
import { useEffect } from "react";
import { fetchOrder } from "./../../../store/order/orderSlice";
import OrderItem from "./order-item/OrderItem";
import styles from "./OrdersList.module.scss";
import CartEmpty from "../../../components/cart-empty/CartEmpty";

const OrdersList = () => {
  const { id } = useAuth();
  const { order } = useAppSelector((state) => state.orderSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id]);

  if (!order.length) return <CartEmpty title={"orders"} />;

  return (
    <div className={styles.orders}>
      {order.map((item) => (
        <div key={item.id}>
          <div className={styles.order_header}>
            <h3>Order №{item.id}</h3>
            <p>Total price: $ {item.totalPrice.toFixed(2)}</p>
          </div>

          <ul className={styles.orders_list}>
            {item.products.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
