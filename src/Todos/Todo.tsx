import moment from "moment";
import { deleteTodo } from "../Store/Actions/todoActions";
import { useDispatch } from "react-redux";

export default function Todo({ todo, setTodo }: any) {
  console.log("Props -->", todo);

  const handleUpdateClick = () => {
    setTodo(todo);
  };
  const dispatch = useDispatch();
  const handleDelete = (id: any) => {
    dispatch<any>(deleteTodo(id));
  };

  return (
    <>
      <h3>name:{todo.name}</h3>
      <h3>Time:{moment(todo.date).fromNow()}</h3>
      <button onClick={() => handleUpdateClick()}>Edit</button>
      <button onClick={() => handleDelete(todo["id"])}> Delete</button>
    </>
  );
}
