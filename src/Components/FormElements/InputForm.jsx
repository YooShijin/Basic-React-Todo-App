import classes from "./InputForm.module.css";
import React, { useState } from "react";
const InputForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTask, setEnteredTask] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredTask != "" && enteredTitle != "") {
      const newTodo = {
        id: Math.random().toString(),
        taskName: enteredTitle,
        task: enteredTask,
      };
      props.onAddTodo(newTodo);
      setEnteredTask("");
      setEnteredTitle("");
    }
  };
  return (
    <>
      <form className={classes.upperBox} onSubmit={onSubmitHandler}>
        <div className={classes["flex-center"]}>
          <label htmlFor="tname">Task Name</label>
          <input
            type="text"
            id="fname"
            name="tname"
            placeholder="Give a name to your task!"
            className={classes.inputBox}
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
          ></input>
        </div>
        <div className={classes["flex-center"]}>
          <label htmlFor="descript">Description</label>
          <input
            type="text"
            id="lname"
            name="descript"
            placeholder="Write your task here!"
            className={classes.inputBox}
            value={enteredTask}
            onChange={(e) => setEnteredTask(e.target.value)}
          ></input>
        </div>
        <div className={classes.buttonHolder}>
          <button type="submit" className={classes.subButton}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
