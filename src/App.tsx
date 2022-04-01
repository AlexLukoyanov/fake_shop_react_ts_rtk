import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home-page/HomePage";
import CardPage from "./pages/card-page/CardPage";
import CartPage from "./pages/cart-page/CartPage";
import LoginPage from "./pages/login-page/LoginPage";
import RegistrationPage from "./pages/registration-page/RegistrationPage";
import OrderPage from "./pages/order-page/OrderPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="card/:id" element={<CardPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
