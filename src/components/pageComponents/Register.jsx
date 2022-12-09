import React from "react";
import axios from "axios";

function Register() {
  async function handleSubmit(event) {
    event.preventDefault();

    // deconstructed user data

    const enteredUsername = event.target.username.value;
    const enteredEmailAddress = event.target.emailAddress.value;
    const enteredPassword = event.target.password.value;

    let response = await axios.post(`http://localhost:5000/api/v1/register`, {
      name: enteredUsername,
      email: enteredEmailAddress,
      password: enteredPassword,
    });

    console.log("User Registered Successfully", response);
  }

  return (
    <div className="flex justify-center">
      <div className="block rounded-lg bg-[#92adbd] max-w-sm text-center shadow-md shadow-[#1a2834]">
        <div className="py-3 px-6 border-b text-[#1a2834] font-medium border-gray-300 uppercase text-2xl">
          Register As An User Here
        </div>
        <div className="p-6">
          <form
            method="POST"
            className="flex flex-col mx-auto space-y-5 justify-center px-3 py-5"
            id="register-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="username" />
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="text"
              placeholder="Enter Username"
              id="username"
              name="username"
            />

            <label htmlFor="emailAddress" />
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="email"
              placeholder="Enter Email-Address"
              id="emailAddress"
              name="emailAddress"
            />

            <label htmlFor="password" />
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
            />

            <button className="inline-block px-6 py-2.5 bg-[#1a2834] text-[#92adbd] font-medium text-xs leading-tight uppercase rounded hover:bg-[#0a2f4f] active:bg-[#1a2834] transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
