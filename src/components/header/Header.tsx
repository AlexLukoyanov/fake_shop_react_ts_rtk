import { CgShoppingBag } from "react-icons/cg";
import Nav from "./nav/Nav";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <span>
              <CgShoppingBag />
            </span>
            <Link to={"/"}>
              <h2>IFake</h2>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
