const UserList = ({ users }) => (
  <p>
    {users.map((user) => (
      <div>
        <h3 key={user.id}>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    ))}
  </p>
);
export default UserList;
