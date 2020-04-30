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
    <div>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          ref={register({ required: "Username required" })}
        />
      </div>
      {errors.username && <p className=" text-white">{errors.username.message} </p>}
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          ref={register({ required: "Password required" })}
        />
      </div>
      {errors.password && <p className="text-white">{errors.password.message} </p>}

     <div className='row'>
        <button type="submit" className="btn btn-primary mx-4">
            Login
        </button>
        <Link to={{pathname: "/register", state: {from: redirect}}}>
            <button className="btn btn-primary">
                Register
            </button>
        </Link>
     </div>
    </form>
    </div>
  );
};

export default LoginForm;