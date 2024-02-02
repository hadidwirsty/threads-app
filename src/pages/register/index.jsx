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
      <h2>Register for your account</h2>
      {registerSuccess && <p>Register success! Now you can log in.</p>}
      <form
        ref={formRef}
        className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-y-6"
        onSubmit={handleRegister}
      >
        <Input
          title="Full name"
          type="text"
          placeholder="e.g. Guntur hidayat"
          id="fullNameInput"
        />

        <Input
          title="Email address"
          type="email"
          placeholder="e.g. test@example.com"
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

        <p className="mt-3">
          Already have an account? Log in{" "}
          <Link to="/login" className="text-link">
            here
          </Link>{" "}
        </p>
      </form>
    </LayoutBase>
  );
};

export default RegisterPage;
