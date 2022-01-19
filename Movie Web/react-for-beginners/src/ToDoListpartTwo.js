import { useState, useEffect } from "react";

function ToDoListpartTwo() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
export default ToDoListpartTwo;