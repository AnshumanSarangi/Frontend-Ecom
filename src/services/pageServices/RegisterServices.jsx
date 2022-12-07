import React, { useState } from "react";
import Register from "../../components/pageComponents/Register";

function RegisterServices() {
  //axios
  const axios = require("axios").default;

  //use state
  const [user, setUser] = useState({
    username: "",
    emailAddress: "",
    password: "",
  });

  // input handler
  let username, value;
  function handleInputs(event) {
    username = event.target.name;
    value = event.target.value;

    setUser({ ...user, [username]: value });
  }

  // submit handler
  async function handleSubmit(event) {
    event.preventDefault();

    // deconstructed user data
    const { username, emailAddress, password } = user;

    const data = {
      username: username,
      emailAddress: emailAddress,
      password: password,
    };
    const fakeData = {
      title: username,
      body: emailAddress,
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = `http://localhost:5000/api/v1/register`;
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, fakeData, headers)
      .then((response) => {
        // navigate("/", { replace: true });
        window.alert("You have been Registered Successfully");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Register
      handleSubmit={handleSubmit}
      handleInputs={handleInputs}
      user={user}
    />
  );
}

export default RegisterServices;
