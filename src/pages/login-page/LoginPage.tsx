import { Link } from "react-router-dom";
import SignIn from "./sign-in/SignIn";

const LoginPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>Sign in</h1>
        <SignIn />
        <p>
          Don't have an account? <Link to={"/registration"}> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
