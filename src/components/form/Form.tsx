import { FC, useState } from "react";
import styles from "./Form.module.scss";

type FormProps = {
  title: string;
  handleSubmit: (email: string, pass: string) => void;
};

const Form: FC<FormProps> = ({ title, handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handlePass: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePass}
        />
      </div>

      <button>{title}</button>
    </form>
  );
};

export default Form;
