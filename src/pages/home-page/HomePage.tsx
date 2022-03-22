import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import CardList from "./card-list/CardList";
import CountProducts from "./count-products/CountProducts";
import FiltersCategory from "./filters-category/FiltersCategory";
import ShowMoreButton from "./show-more-button/ShowMoreButton";
import CardSkeleton from "./card-skeleton/CardSkeleton";

const HomePage = () => {
  const [limitProducts, setLimitProducts] = useState<number>(8);
  const { isLoading } = useAppSelector((state) => state.productsSlice);

  return (
    <div className="page">
      <div className="main_photo">
        <img width={"100%"} src="img/main.jpg" alt="sale" />
      </div>
      <div className="container">
        <h1>Shop</h1>
        <FiltersCategory />
        <CountProducts />
        <CardList limitProducts={limitProducts} />
        {!isLoading && <CardSkeleton />}
        <CountProducts />
        <ShowMoreButton setLimitProducts={setLimitProducts} />
      </div>
    </div>
  );
};

export default HomePage;
