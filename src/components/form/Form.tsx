import { FC } from "react";
import styles from "./Form.module.scss";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = ({ title }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>

      <button>{title}</button>
    </form>
  );
};

export default Form;
