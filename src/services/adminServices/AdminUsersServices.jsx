import React, { useState, useEffect } from "react";
import AdminUsers from "../../components/adminComponents/AdminUsers";

function AdminUsersServices() {
  const [users, setUsers] = useState([]);

  const axios = require("axios").default;

  const url = `https://jsonplaceholder.typicode.com/todos/`;

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(url);
      console.log("Product Axios Response: ", response.data);
      setUsers(response.data);
    }
    getUsers();
  }, []);
  return (
    <div>
      {products.map((element) => {
        console.log(element);
        return <AdminUsers key={element.id} products={element} />;
      })}
    </div>
  );
}

export default AdminUsersServices;
