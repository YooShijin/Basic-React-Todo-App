import React, { useState } from "react";
import classes from "./Todo.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
const Todo = (props) => {
  const [complete, setComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState(props.tname);
  const [enteredTask, setEnteredTask] = useState(props.task);

  function onCompleteHandler(e) {
    props.edit(props.id, props.tname, props.task, !complete);
    setComplete((prev) => !prev);
  }
  function onDeleteHandler(e) {
    props.delete(props.id);
  }

  function onEditHandler(e) {
    if (isEditing) props.edit(props.id, enteredTitle, enteredTask, false);
    setIsEditing((prev) => !prev);
  }

  return (
    <div className={classes.todoHolder}>
      <div className={classes.contentBox}>
        {isEditing ? (
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="lname"
              name="title"
              className={classes.inputBox}
              value={enteredTitle}
              onChange={(e) => setEnteredTitle(e.target.value)}
            ></input>
            <label htmlFor="descript">Description</label>
            <input
              type="text"
              id="lname"
              name="descript"
              className={classes.inputBox}
              value={enteredTask}
              onChange={(e) => setEnteredTask(e.target.value)}
            ></input>
          </div>
        ) : (
          <div>
            <h2 className={props.status ? classes.completed : " "}>
              {props.tname}
            </h2>
            <p className={props.status ? classes.completed : ""}>
              {props.task}
            </p>
          </div>
        )}
      </div>
      <div className={classes.buttonHolder}>
        <button onClick={onCompleteHandler}>
          <TiTick></TiTick>
        </button>
        <button onClick={onDeleteHandler}>
          <MdDelete></MdDelete>
        </button>
        <button onClick={onEditHandler}>
          <MdEdit></MdEdit>
        </button>
      </div>
    </div>
  );
};

export default Todo;
