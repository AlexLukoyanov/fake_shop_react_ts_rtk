import OrdersList from "./orders-list/OrdersList";
import { useAuth } from "./../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const OrderPage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to={"/"} replace />;

  return (
    <div className="page">
      <div className="container">
        <h1>Orders</h1>
        <OrdersList />
      </div>
    </div>
  );
};

export default OrderPage;
