import { AddTodo } from "./AddTodos";
import { ListTodos } from "./ListTodos";
import { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState<any>({
    name: "",
    isCompete: false,
    // date: "",
  });
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </>
  );
};
export default Todos;
