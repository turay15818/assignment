import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Dashboard = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:9090/users");
    setUsers(response.data);

  };


  return (
    <div>
      <h2 style={{ marginTop: "150px" }}>Welcome Home</h2>

      <h3>
        {users.map((user) => (
          <h1>{user.fullName}</h1>
        ))}
      </h3>

    </div>
  )
}

export default Dashboard