import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { asyncSetAuthUser } from "../../helpers/auth/action";
import LayoutBase from "../../components/layouts/base";
import Input from "../../components/partials/input";
import Button from "../../components/partials/button";

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = formRef.current[0].value;
    const password = formRef.current[1].value;

    dispatch(asyncSetAuthUser({ email, password }));
    setLoginSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <LayoutBase>
      <h2 className="text-center">Log in to your account</h2>
      {loginSuccess && <p>Log in success! Now you can interact with others.</p>}
      <form
        ref={formRef}
        className="mx-auto mt-16 flex max-w-md flex-col items-center justify-center gap-y-3"
        onSubmit={handleLogin}
      >
        <Input title={null} type="email" placeholder="Email" id="emailInput" />
        <Input
          title={null}
          type="password"
          placeholder="Password"
          id="passwordInput"
        />
        <Button type="submit">Log in</Button>
      </form>
      <p className="mt-3 text-center">
        Don&apos;t have an account yet?{" "}
        <Link to="/register" className="text-link">
          Register here!
        </Link>{" "}
      </p>
    </LayoutBase>
  );
};

export default LoginPage;
