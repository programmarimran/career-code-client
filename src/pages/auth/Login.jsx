import React from "react";
import AuthHook from "../../hooks/AuthHook";
import Lottie from "lottie-react";
import loginPageAnimaion from "../../assets/lottis/login-animation.json";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state;
  const { loginUser } = AuthHook();
  const handleRegister=(e)=>{
e.preventDefault()
const form=e.target;
const email=form.email.value;
const password=form.password.value;
loginUser(email,password)
.then(result=>{
    console.log(result.user)
    navigate(from||"/")
})
.catch(error=>{
    console.log(error)
})
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={loginPageAnimaion}
            loop={true}
          />
          ;
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <fieldset className="fieldset">
              <label className="label">name</label>
              <input type="text" name="name" className="input" placeholder="name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
