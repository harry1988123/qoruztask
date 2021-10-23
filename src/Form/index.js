import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";

export const Form = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">New Task</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
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
