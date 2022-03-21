import { useAppSelector } from "../../hooks/redux";
import FiltersCategory from "./filters-category/FiltersCategory";

const HomePage = () => {
  const category = useAppSelector((state) => state.categoriesSlice);

  return (
    <div className="page">
      <div className="main_photo">
        <img width={"100%"} src="img/main.jpg" alt="sale" />
      </div>
      <div className="container">
        <h1>Shop</h1>

        <FiltersCategory />
      </div>
    </div>
  );
};

export default HomePage;
