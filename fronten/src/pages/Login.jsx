import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [login, setLogin] = useState(false)

console.log("console checked");
let name = "Haider Ali "

function clicked() {
    console.log("ye react js k onclick function ha.......");
}

  return (
    <div>
        <div>{name}</div>
        <div className="loginContainer h-screen flex justify-center items-center">
            <div className="loginBox flex flex-col border h-[70%] w-[50%] justify-around items-center">
                <h1 className='text-3xl font-bold'>{login ? "Login" : "Signup"} Form</h1>
                <input type="text" placeholder='Enter Your Username' className={` ${
                    login ? "hidden" : "block"
                }  border w-[90%] px-5 py-4`} />
                <input className='border w-[90%] px-5 py-4' type="email" placeholder='Enter Your Email' />
                <input type="password" className='border w-[90%] px-5 py-4' placeholder='Enter Your Password' />
                <button onClick={clicked} to="/" className='bg-red-800 px-10 py-2 rounded-full text-white'>SUBMIT</button>
                <p>{login ? "Don't have an Account" : "Already Have an Account"}? <Link onClick={()=>setLogin(!login)} className="text-blue-700" >{login ? "Signup" : "Login"}</Link> </p>
            </div>
        </div>
    </div>
  )
}

export default Login