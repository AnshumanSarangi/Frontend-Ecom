// import required modules
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import and define Axios
import axios from "axios";

function Login() {
  // define useNavigate
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;

    // setLoginData({ email: enteredEmail, password: enteredPassword });

    // Axios sends data from this page to backend

    let url = `http://localhost:5000/api/v1/login`;
    const res = await axios.post(url, {
      email: enteredEmail,
      password: enteredPassword,
    });
    console.log("User Logged In");
  }

  return (
    <div className="flex justify-center">
      <div className="block rounded-lg bg-[#92adbd] max-w-sm text-center shadow-md shadow-[#1a2834]">
        <div className="py-3 px-6 border-b text-[#1a2834] font-medium border-gray-300 uppercase text-2xl">
          Please Login Here
        </div>
        <div className="p-6">
          <form
            className="flex flex-col mx-auto space-y-5 justify-center px-3 py-5 border-b border-gray-300"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email-Address"
            ></input>

            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              required
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            ></input>

            <button className="inline-block px-6 py-2.5 bg-[#1a2834] text-[#92adbd] font-medium text-xs leading-tight uppercase rounded hover:bg-[#0a2f4f] active:bg-[#1a2834] transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out">
              Login
            </button>
          </form>
          <div className="w-full flex items-center justify-center px-3 py-10">
            <button
              className="inline-block px-6 py-2.5 bg-[#0a2f4f] text-[#92adbd] font-medium text-xs leading-tight uppercase rounded hover:bg-[#1a2834] active:bg-[#0a2f4f] transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
              //   onClick={() => navigate("/user/new")}
            >
              Create An Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
