import React from "react";

function Register(props) {
  const { handleInputs, handleSubmit, user } = props;
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
              value={user.username}
              onChange={handleInputs}
            />

            <label htmlFor="emailAddress" />
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="email"
              placeholder="Enter Email-Address"
              id="emailAddress"
              name="emailAddress"
              value={user.emailAddress}
              onChange={handleInputs}
            />

            <label htmlFor="password" />
            <input
              className="w-full h-12 outline-none bg-[#92adbd] text-[#1a2834] font-medium placeholder:text-[#465059] border border-[#1a2834] rounded-md text-sm shadow-md px-5"
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
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
