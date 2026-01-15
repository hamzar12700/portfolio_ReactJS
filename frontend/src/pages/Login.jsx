
import React, { useContext, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalContext } from '../ContextApi/Context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { login,
    setLogin,
    formData,
    setFormData, 
  formSubmit
  } = useContext(GlobalContext)

  return (
    <div className="loginContainer h-screen flex justify-center items-center">
      <form
        onSubmit={formSubmit}
        className="loginBox flex flex-col border h-[70%] w-[50%] justify-around items-center"
      >
        <h1 className="text-3xl font-bold">
          {login ? "Login" : "Signup"} Form
        </h1>

        {/* Username (Signup only) */}
        {!login && (
          <input
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            type="text"
            placeholder="Enter Your Username"
            className="border w-[90%] px-5 py-4"
          />
        )}

        {/* Email */}
        <input
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="border w-[90%] px-5 py-4"
          type="email"
          placeholder="Enter Your Email"
        />

        {/* Password */}
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type={showPassword ? "text" : "password"}
          className="border w-[90%] px-5 py-4"
          placeholder="Enter Your Password"
        />
        <div className='w-full text-end px-8'>  <input onChange={() => setShowPassword(!showPassword)} type="checkbox" /> {showPassword ? "Hide Password" : "Show Password"}</div>


{/* ====== submit button ======= */}
 <button
  type="submit"
  className="
    bg-red-800 text-white
    px-10 py-2 rounded-full
    shadow-lg
    transition-all duration-300 ease-in-out
    hover:bg-red-700
    hover:shadow-2xl
    hover:scale-105
    active:scale-95
  "
>
  SUBMIT
</button>


        <p>
          {login ? "Don't have an Account" : "Already Have an Account"}?{" "}
          <Link
            onClick={() => setLogin(!login)}
            className="text-blue-700 cursor-pointer"
          >
            {login ? "Signup" : "Login"}
          </Link>
        </p>
      </form>

    </div>
  );
};

export default Login;
