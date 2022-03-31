import { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import styles from "./Form.module.scss";

type FormProps = {
  title: string;
  getDataForm: (email: string, pass: string) => void;
  firebaseError: string;
};

const Form: FC<FormProps> = ({ title, getDataForm, firebaseError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const userEmail = {
    required: "Required field.",
    pattern: {
      value:
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
      message: "The e-mail address you entered is incorrect.",
    },
  };

  const userPassword = {
    required: "Required field.",
    minLength: {
      value: 8,
      message: "Minimum 8 characters.",
    },
    maxLength: {
      value: 16,
      message: "Maximum 16 characters.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm,
      message: `Minimum 8 characters, 1 letter, 1 digit.`,
    },
  };

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    getDataForm(email, password);

    reset();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        <div>
          {errors?.email && (
            <span className={styles.form_error}>{errors?.email?.message}</span>
          )}
        </div>
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        <div>
          {errors?.password && (
            <span className={styles.form_error}>
              {errors?.password?.message}
            </span>
          )}
        </div>
      </div>

      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  );
};

export default Form;
