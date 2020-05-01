import React from "react";
import "./signUpForm.css";
import useForm from "react-hook-form";
import { Link } from "react-router-dom";


const SignUpForm = ({action}) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    action(data);
    reset({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form className="modal-content animate" onSubmit={handleSubmit(onSubmit)}>
    <div className="imgcontainer">
      <img src={"./fallback.png"} alt="Avatar" class="avatar"/>
    </div>

    <div className="container loginSignUp">
      <label for="username"><b>Username</b></label>
       <input
          className="loginSignUp"
          type="text"
          autoComplete="off"
          placeholder="Username"
          name="username"
          ref={register({ required: "Username is a required field" })}
        />
      {errors.username && <p className="text-red">{errors.username.message} </p>}
      
      <label for="password"><b>Password</b></label> 
      <input
        type="password"
        autoComplete="off"
        placeholder="Password"
        name="password"
        ref={register({ required: "Password is a required field" })}
      />
      {errors.password && <p className="text-red">{errors.password.message} </p>}   
         
      <label for="password"><b>Confirm Password</b></label> 
      <input
        type="password"
        autoComplete="off"
        placeholder="Confirm Password"
        name="confirmPassword"
        ref={register({ required: "Confirm Password is a required field" })}
      />
     {errors.confirmPassword && <p className="text-red">{errors.confirmPassword.message} </p>}

      <button type="submit">Sign Up</button>
      <div class="container">
        <span class="psw"><Link to={{pathname: "/login"}}>
          Already a member ? </Link></span>
      </div>
    </div>
  </form>
  );
};

export default SignUpForm;