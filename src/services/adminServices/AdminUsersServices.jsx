import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminUsers from "../../components/adminComponents/AdminUsers";

function AdminUsersServices() {
  const [users, setUsers] = useState([]);

  // const headers = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Token":`bearer ${res.data.token}`
  //   },
  // };

  const url = `http://localhost:5000/api/v1/admin/users`;

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(url);
      console.log("Product Axios Response: ", response.data);
      setUsers(response.data.allUsers);
    }
    getUsers();
  }, []);

  return users ? <Loaded users={users} /> : <Loading />;
}

function Loading() {
  return <h2>loading...</h2>;
}
function Loaded(props) {
  const { users } = props;
  return (
    <div className="grid grid-cols-4">
      {users.map((element) => {
        // console.log(element);
        return <AdminUsers key={element.id} users={element} />;
      })}
    </div>
  );
}

export default AdminUsersServices;
