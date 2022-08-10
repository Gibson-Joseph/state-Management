const todoReducer = (state = [], action: any) => {
  switch (action.type) {
    case "GET_TODO":
      // console.log("Get Action", action);
      return action.todos.data;

    case "ADD_TODO":
      // console.log("Add Action", action);
      // console.log(action.todo.data);

      return [action.todo.data, ...state];
    case "UPDATE_TODO":
      return state.map((todo, index: number) =>
        todo["id"] === action.type.data.id ? action.todo.data : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo["id"] !== action.id);

    default:
      return state;
  }
};

export default todoReducer;
