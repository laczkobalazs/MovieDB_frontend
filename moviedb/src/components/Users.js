import React, { useEffect, useState } from "react";
import Axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/users";
    Axios.get(url).then((data) => {
      console.log(data.data);
      setUsers(data.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p>
          Username: {user.userName} | Email address: {user.email} | Roles:
          {user.roles}
        </p>
      ))}
    </div>
  );
}

export default Users;
