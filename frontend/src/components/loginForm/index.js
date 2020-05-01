import React from "react";
import "./loginForm.css";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = ({action, redirect}) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    action(data);
    reset({
      username: "",
      password: ""
    });
  };

  return (
    <form className="modal-content animate" onSubmit={handleSubmit(onSubmit)}>
    <div className="imgcontainer">
      <img src={"./fallback.png"} alt="Avatar" class="avatar"/>
    </div>

    <div className="container loginSignUp">
      <label for="username"><b>Username</b></label>
      <input type="text"          
        autoComplete="off"
        placeholder="Username"
        name="username"
        ref={register({ required: "Username is a required field" })}
      />
      {errors.username && <p className="text-red">{errors.username.message} </p>}
      
      <label for="password"><b>Password</b></label>
      <input
          autoComplete="off"
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: "Password is a required field" })}
        />  
      {errors.password && <p className="text-red">{errors.password.message} </p>}      
      <button type="submit">Login</button>
      <div class="container">
        <span class="psw"> <Link to={{pathname: "/signup", state: {from: redirect}}}>
          Not registered yet? </Link></span>
      </div>
    </div>
  </form>
  );
};

export default LoginForm;