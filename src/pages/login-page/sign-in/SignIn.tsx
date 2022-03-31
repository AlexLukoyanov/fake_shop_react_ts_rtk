import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { setUser } from "../../../store/user/userSlice";
import { setUserId } from "../../../store/cart/cart.slice";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, pass: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
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
      .catch(console.error);
  };
  return <Form title={"Sign in"} handleSubmit={handleLogin} />;
};

export default SignIn;
