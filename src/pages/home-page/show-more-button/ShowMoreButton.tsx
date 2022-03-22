import { FC } from "react";
import styles from "./ShowMoreButton.module.scss";

type ShowMoreButtonProps = {
  setLimitProducts: (prev: any) => void;
};

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ setLimitProducts }) => {
  const fetchMoreProducts = () => {
    setLimitProducts((prev: number) => prev + 4);
  };

  return (
    <button onClick={fetchMoreProducts} className={styles.show_more_button}>
      Show more products
    </button>
  );
};

export default ShowMoreButton;
