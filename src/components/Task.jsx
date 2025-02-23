import React from "react";
import MyButton from "./UI/button/MyButton";
import "../style/App.css";
import TaskForm from "./TaskForm";
import MyModal from "./UI/modal/MyModal";
import { useState } from "react";

const Task = props => {
  const [isComplete, setIsComplete] = useState(false);

  const checkboxChange = () => {
    setIsComplete(!isComplete);
  };
  return (
    <div
      className={`task relative p-4 pb-10 border rounded-md ${isComplete
        ? "line-through text-gray-500"
        : ""}`}
    >
      <div className="flex-grow overflow-hidden">
        <p className="task-title text-black font-bold">
          {props.number}. {props.task.title}
        </p>
        <hr />
        <div className="task-body">
          {props.task.body}
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <input
          type="checkbox"
          className="checkbox border-black"
          onClick={checkboxChange}
        />
        <div className="flex flex-wrap gap-2 justify-end">
          <MyButton onClick={() => props.edit(props.task)}>Edit</MyButton>
          <MyButton onClick={() => props.remove(props.task)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Task;
