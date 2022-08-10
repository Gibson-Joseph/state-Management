import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../Store/Actions/todoActions";
export const AddTodo = (props: any) => {
  const dispatch = useDispatch();

  const handleSubmit = (
    e:
      | React.DOMAttributes<HTMLFormElement>
      | React.FormEventHandler<HTMLFormElement>
      | React.FormEventHandler<HTMLFormElement>
      | any
  ) => {
    e.preventDefault();
    if (props.todo.id) {
      const id = props.todo.id;
      const updatedTodo = {
        name: props.todo.name,
        date: props.todo.date,
      };
      dispatch<any>(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...props.todo,
        isComplete: props.isComplete,
        date: new Date(),
      };
      dispatch<any>(addTodo(newTodo));
    }
    props.setTodo({
      name: "",
      isCompete: false,
    });
  };

  // useEffect(() => {
  //   dispatch<any>(getTodos());
  // }, [dispatch]);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={props.todo.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setTodo({
              ...props.todo,
              name: e.target.value,
            })
          }
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};
