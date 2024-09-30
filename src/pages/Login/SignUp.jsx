import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    localStorage.setItem("user", JSON.stringify(data));
    alert("Successfully signed up! You can now log in.");
    navigate('/')
    e.target.reset();
  };

  return (
    <form
      onSubmit={ handleSubmitSignUp}
      autoComplete="off"
      className="w-[450px] mx-auto mt-[60px]"
    >
      <h1 className="font-bold mb-[36px] text-[42px]">Sign up to Twitter</h1>
      <Input
        isRequired={true}
        placeholder="Enter your username"
        type="text"
        name="username"
        extraStyle="mb-[25px]"
      />
      <Input
        isRequired={true}
        placeholder="Password"
        type="password"
        name="password"
        extraStyle="mb-[25px]"
      />
      <Button type={'submit'}  title="Sign Up" />
      <div className="flex items-center mt-[40px] justify-between">
        <Link to={"/"} className="text-[18px] text-[#1da1f2]">
          Already have an account? Log in
        </Link>
      </div>
    </form>
  );
}

export default SignUp;
