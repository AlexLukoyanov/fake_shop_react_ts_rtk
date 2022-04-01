import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className={styles.not_found}>
          <img src="/img/page_error.png" alt="page not found" />
          <p>The page you looking is not found.</p>
          <p>
            <Link to={"/"}>Go to home page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
