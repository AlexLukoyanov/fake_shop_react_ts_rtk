import { Link } from "react-router-dom";

import SignUp from "./sign-up/SignUp";

const RegistrationPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h1>Sign Up</h1>
        <SignUp />
        <p>
          Already have an account ? <Link to={"/login"}> Sign in </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
