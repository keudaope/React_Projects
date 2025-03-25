import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="userList">
      {users.map((user) => (
        <div key={user.login.uuid} className="user">
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
          <img src={user.picture.medium} alt={user.name.first} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
