import React, { useEffect, useState } from "react";
import InputForm from "./FormElements/InputForm";
import TodoElements from "./TodoElements";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([]);

  const onAddTodosHandler = (newTodo) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: newTodo.id,
        taskName: newTodo.taskName,
        task: newTodo.task,
        status: false,
      },
    ]);
  };

  const onDeleteTodosHandler = (Id) => {
    setTodoList((prev) => prev.filter((el) => el.id != Id));
  };

  const onEditTodosHandler = (Id, title, task, flag) => {
    setTodoList((prev) =>
      prev.map((el) => {
        if (el.id == Id) {
          return { id: Id, taskName: title, task: task, status: flag };
        } else {
          return el;
        }
      })
    );
  };
  useEffect(() => {
    const data = window.localStorage.getItem("data");
    if (data) setTodoList(JSON.parse(data));
    console.log(todoList);
  }, []);

  useEffect(() => {
    if (todoList) {
      window.localStorage.setItem("data", JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <>
      <InputForm onAddTodo={onAddTodosHandler}></InputForm>
      <TodoElements
        todolist={todoList}
        deleteTodo={onDeleteTodosHandler}
        editTodo={onEditTodosHandler}
      ></TodoElements>
    </>
  );
};

export default TodoList;
