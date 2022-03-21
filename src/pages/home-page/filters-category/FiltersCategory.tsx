import styles from "./FiltersCategory.module.scss";
import CategoryTab from "./category-tab/CategoryTab";
import { CategoriesName } from "../../../store/categories/categories.type";

const FiltersCategory = () => {
  return (
    <div className={styles.filter_category}>
      <CategoryTab text={"All"} categoryName={CategoriesName.All} />
      <CategoryTab
        text={"Electronics"}
        categoryName={CategoriesName.Electronics}
      />
      <CategoryTab text={"Jewelery"} categoryName={CategoriesName.Jewelery} />

      <CategoryTab
        text={"Men's Clothing"}
        categoryName={CategoriesName.MensClothing}
      />
      <CategoryTab
        text={"Women's Clothing"}
        categoryName={CategoriesName.WomensClothing}
      />
    </div>
  );
};

export default FiltersCategory;
