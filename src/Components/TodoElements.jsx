import React, { useState } from "react";
import Todo from "./Todo";

const TodoElements = (props) => {
  console.log(props.todolist);
  const container = props.todolist?.map((ele) => {
    return (
      <Todo
        tname={ele.taskName}
        id={ele.id}
        task={ele.task}
        status={ele.status}
        key={ele.id}
        delete={props.deleteTodo}
        edit={props.editTodo}
      ></Todo>
    );
  });
  return <>{container}</>;
};

export default TodoElements;
