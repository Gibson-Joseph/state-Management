const todoReducer = (state = [], action: any) => {
  switch (action.type) {
    case "GET_TODO":
      return action.todos.data;

    case "ADD_TODO":
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
