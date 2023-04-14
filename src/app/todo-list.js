import Todo from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://127.0.0.1:3001/api/todo/list"); //-> full destination as it is a server component
  return todos.json();
};

const TodoList = async () => {
  const { todos } = await getTodos();
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
