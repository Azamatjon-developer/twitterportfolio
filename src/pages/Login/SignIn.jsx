import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from "../../context/context";
import { TwitterLogo } from "../../assets/images/Icons";

function SignIn() {
  const { setToken } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === data.login && storedUser.password === data.password) {
      alert("Successfully logged in!");
      setToken(data)
      e.target.reset();
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmitLogin}
      autoComplete="off"
      className="w-[450px] mx-auto mt-[60px]"
    >
      <Link to={"/"} className="mb-[36px] inline-block">
        <TwitterLogo/>
      </Link>
      <h1 className="font-bold mb-[36px] text-[42px]">Log in to Twitter</h1>
      <Input
        isRequired={true}
        placeholder="Enter your username"
        type="text"
        name="login"
        extraStyle="mb-[25px]"
      />
      <Input
        isRequired={true}
        placeholder="Password"
        type="password"
        name="password"
        extraStyle="mb-[25px]"
      />
      <Button title="Log In" />
      <div className="flex items-center mt-[40px] justify-between">
        <Link to={"/sign-up"} className="text-[18px] text-[#1da1f2]">
          Forgot password?
        </Link>
        <Link to={"/sign-up"} className="text-[18px] text-[#1da1f2]">
          Sign up to Twitter
        </Link>
      </div>
    </form>
  );
}

export default SignIn;
