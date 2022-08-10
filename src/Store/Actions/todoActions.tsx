import axios from "axios";
import { url } from "../../api";

export const getTodos = () => {
  return (dispatch: any) => {
    axios
      .get(`${url}/todos`)
      .then((todos) => {
        dispatch({
          type: "GET_TODO",
          todos,
        });
        // console.log("Dispatch", todos);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addTodo = (newTodo: any) => {
  return (dispatch: any, getState: any) => {
    axios
      .post(`${url}/todos`, newTodo)
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          newTodo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updateTodo = (updatedTodo: any, id: number) => {
  return (dispatch: any) => {
    axios
      .put(`${url}/todos/${id}`, updatedTodo)
      .then((todo) => {
        dispatch({
          type: "UPDATE_TODO",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const deleteTodo = (id: number) => {
  return (dispatch: any) => {
    axios
      .delete(`${url}/todos/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
