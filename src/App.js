import React, { useState } from "react";
import "./App.css";
import { AvatarGenerator } from "random-avatar-generator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from './Container';

function App() {
  const generator = new AvatarGenerator();
  console.log(generator.generateRandomAvatar());
  const onChangeValue = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(event);

  }
  const triggerText = 'Add task';
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="App">
      <header>
        <img
          width={80}
          style={{ float: "right" }}
          src={generator.generateRandomAvatar()}
        />
        <h2>Tasks</h2>
      </header>
      <hr />
      <section>
        <div className="todolist" onChange={onChangeValue}>
          <input type="radio" value="Task 1" name="Task" /> Task 1
          <input type="radio" value="Sub Task 1" /> SubTask 1
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <input type="radio" value="Sub Task 1" /> SubTask 2
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <hr />
        <div className="completedTodo">
          <h2>Completed Tasks</h2>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <span aria-hidden="true">✔</span>
            <h3>Task 2</h3>
          </div>
        </div>
        <hr/>
        <div className="addTodo">
          <h3>Add a task</h3>
          {/* <img src="https://www.gstatic.com/tasks/task-add-accent-light.svg"/> */}
          <Container triggerText={triggerText} onSubmit={onSubmit} />
        </div>
      </section>
    </div>
  );
}

export default App;
