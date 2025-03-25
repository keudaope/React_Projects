export default function Todos({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.task} - <b>{todo.completed ? "Valmis" : "Kesken"}</b>
        </li>
      ))}
    </ul>
  );
}
