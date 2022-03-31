import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { setUser } from "../../../store/user/userSlice";
import { setUserId } from "../../../store/cart/cart.slice";
import { useState } from "react";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [firebaseError, setFaerbaseError] = useState("");

  const handlePassword = (email: string, pass: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        dispatch(
          setUser({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
          })
        );
        dispatch(setUserId(userCredential.user.uid));
        navigate("/");
      })
      .catch((error) => {
        return error && setFaerbaseError("Invalid email or password.");
      });
  };
  return (
    <Form
      title={"Sign up"}
      getDataForm={handlePassword}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
