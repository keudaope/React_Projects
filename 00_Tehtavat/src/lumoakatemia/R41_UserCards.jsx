export default function UserCards({ users }) {
  return users.map((user) => (
    <p key={user.id}>
      {user.name} - {user.email}
    </p>
  ));
}
