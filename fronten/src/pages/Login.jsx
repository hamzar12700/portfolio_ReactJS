
import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false)

  async function formSubmit(e) {
    e.preventDefault(); 

    try {
      if (login) {
        const res = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: formData.email,
            password: formData.password
          },
          { withCredentials: true }
        );

        console.log("Login Success:", res.data);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/auth/signup",
          {
            name: formData.username,
            email: formData.email,
            password: formData.password
          }
        );

        console.log("Signup Success:", res.data);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }

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
      <div>  <input onChange={()=>setShowPassword(!showPassword)} type="checkbox"  /> {showPassword ? "Hide Password" : "Show Password"}</div>

        <button
          type="submit" className="bg-red-800 px-10 py-2 rounded-full text-white">SUBMIT</button>

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
