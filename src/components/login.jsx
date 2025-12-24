import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState(true);
    const toggleSignInForm=()=>{
        setIsSigninForm(!isSigninForm);
    }
  return (
    <div className="relative h-screen w-screen">
      
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/ec/80/a6/ec80a6378f9b21d149bdacbba282f584.jpg"
        alt="NetflixGPT Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Login Form */}
      <form className="absolute w-3/12 p-12 bg-black bg-opacity-90 
                       top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       text-white rounded ">
        
        <h1 className="font-bold text-3xl py-4">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
        {!isSigninForm && (
        <input
            type="text"
            placeholder="Username"
            className="p-3 my-2 w-full bg-gray-700 rounded"
        />)}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded"
        />

        <button className="p-3 my-4 bg-red-700 w-full rounded font-semibold">
          {isSigninForm ? "Sign In" : "Sign Up"}

        
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSigninForm ? "New to Netflix? Sign Up now" : "Already have an account? Sign In now"}</p>
      </form>

    </div>
  );
};

export default Login;
