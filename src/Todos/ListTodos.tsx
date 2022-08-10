import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Store/Actions/todoActions";
import { AddTodo } from "./AddTodos";
import Todo from "../Todos/Todo";

export const ListTodos = (props: any) => {
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);
  console.log("todos", todos);

  console.log("state", todos.name);
  useEffect(() => {
    dispatch<any>(getTodos());
  }, [dispatch]);
  return (
    <>
      {todos.map((todo: any, index: number) => (
        <Todo todo={todos[index]} key={todo.id} setTodo={props.setTodo} />
      ))}
      {/* <AddTodo /> */}
    </>
  );
};
