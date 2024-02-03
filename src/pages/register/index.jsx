import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { asyncRegisterUser } from "../../helpers/users/action";
import LayoutBase from "../../components/layouts/base";
import Input from "../../components/partials/input";
import Button from "../../components/partials/button";

const RegisterPage = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = formRef.current[0].value;
    const email = formRef.current[1].value;
    const password = formRef.current[2].value;

    dispatch(asyncRegisterUser({ name, email, password }));
    setRegisterSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <LayoutBase>
      {registerSuccess && <p>Register success! Now you can log in.</p>}
      <h2 className="text-center">Register for your account</h2>
      <p className="mt-3 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-link">
          Log in here
        </Link>{" "}
      </p>
      <form
        ref={formRef}
        className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-y-3"
        onSubmit={handleRegister}
      >
        <Input
          title="Full name"
          type="text"
          placeholder="Enter your full name..."
          id="fullNameInput"
        />
        <Input
          title="Email address"
          type="email"
          placeholder="Enter your email..."
          id="emailInput"
        />
        <Input
          title="Password"
          type="password"
          placeholder="min. 6 char"
          min={6}
          id="passwordInput"
        />
        <Button type="submit">Register</Button>
      </form>
    </LayoutBase>
  );
};

export default RegisterPage;
