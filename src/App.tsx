import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home-page/HomePage";
import CardPage from "./pages/card-page/CardPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="card/:id" element={<CardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
