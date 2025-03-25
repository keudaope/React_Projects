import { useState, useEffect } from "react";
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return users.map((user) => (
    <div key={user.login.uuid} className="user">
      <img src={user.picture.medium} alt="" />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>
        {user.location.street.name} {user.location.street.number}{" "}
      </p>
    </div>
  ));
}
