import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddTodo,
  SelectedtodoList,
  setCompletedTodo,
  setPendingTodo,
} from "../Slices/appSlice";

export const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector(SelectedtodoList);
  const addTodo = (value) => {
    value.preventDefault();
    dispatch(
      setAddTodo({
        id: Math.round(todoList.todoList.length + 1),
        name,
        Date: startDate.toLocaleDateString(),
        status: "Pending",
      })
    );
    dispatch(setCompletedTodo());
    dispatch(setPendingTodo());
  };
  return (
    <form onSubmit={addTodo}>
      <div className="form-group">
        <label htmlFor="name">New Task name</label>
        <input
          className="form-control"
          id="name"
          onChange={(name) => setName(name.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Enter date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
