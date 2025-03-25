const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li>{todo.task}</li>
    ))}
  </ul>
);
export default TodoList;
