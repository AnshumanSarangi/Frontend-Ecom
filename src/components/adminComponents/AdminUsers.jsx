import React from "react";

function AdminUsers() {
  return (
    <div>
      <img src={users.profilePicture} alt={users.name} />
      <span>
        <div>
          <h3>Name : {users.name}</h3>
          <p>Email : {users.email}</p>
          <p>
            Role : {users.role}
            <span>
              <button>Make Admin || Make User</button>
            </span>
          </p>
        </div>
      </span>
    </div>
  );
}

export default AdminUsers;
