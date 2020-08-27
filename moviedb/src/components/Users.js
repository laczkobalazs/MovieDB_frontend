import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../style/Users.scss";

function Users() {
  const [users, setUsers] = useState([]);
  const cookieValue = document.cookie.split("=")[1];

  const receiveUsers = (url) => {
    Axios.get(url, {
      withCredentials: true,
      headers: { Authorization: cookieValue },
    }).then((data) => {
      setUsers(data.data);
    });
  };

  useEffect(() => {
    const url = "http://localhost:8080/users";
    const redirectUrl = "http://localhost:3000";
    if (!cookieValue) {
      window.location.replace(redirectUrl);
    }
    Axios.get(url, {
      withCredentials: true,
      headers: { Authorization: cookieValue },
    })
      .then((data) => {
        setUsers(data.data);
      })
      .catch((e) => {
        window.location.replace(redirectUrl);
      });
  }, [cookieValue]);

  const deleteUser = (id) => {
    const url = `http://localhost:8080/users/${id}`;
    Axios.delete(url, {
      withCredentials: true,
      headers: { Authorization: cookieValue },
    }).then((data) => {
      receiveUsers("http://localhost:8080/users");
    });
  };

  return (
    <div>
      {users.length !== 0 ? (
        <table className="rwd-table">
          <thead>
            <tr>
              <td className="head-column">ID</td>
              <td className="head-column">Username</td>
              <td className="head-column">Email address</td>
              <td className="head-column">Roles</td>
              <td className="head-column">Delete</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.roles}</td>
                {user.roles === "[ROLE_USER]" ? (
                  <td>
                    <button onClick={() => deleteUser(user.id)}>X</button>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span></span>
      )}
    </div>
  );
}
export default Users;
