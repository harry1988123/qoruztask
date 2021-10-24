import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { AvatarGenerator } from "random-avatar-generator";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "./Container";
import { 
  setCompletedTodo,
  setPendingTodo, 
  setRemoveTodo
} from "./Slices/appSlice";
import { Table } from "antd";
import "antd/dist/antd.css";

function App() {
  const generator = new AvatarGenerator();
  const onChangeValue = (e) => { 
    dispatch(setRemoveTodo({id:e.target.value}))
    dispatch(setCompletedTodo());
    dispatch(setPendingTodo()); 
  };  
  const triggerText = "Add task"; 
  const completedTodo =  useSelector(x => x.todoList.completedTodo);
  const pendingTodo = useSelector(x => x.todoList.pendingTodo); 
  
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(setCompletedTodo());
    dispatch(setPendingTodo()); 
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Date",
      dataIndex: "Date",
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "operation",
      render: (e) => { return e["status"] === "Pending" ?  <input type='radio' value={e.id} /> : <span aria-hidden="true">✔</span> }
    },
  ];

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
          {pendingTodo ? (
            <Table columns={columns} dataSource={pendingTodo} size="middle" />
          ) : (
            <div></div>
          )}
        </div>
        <hr />
        <div className="completedTodo">
          <h2>Completed Tasks</h2>
          <div>
            {completedTodo ? (
            <Table columns={columns} dataSource={completedTodo} size="middle" />
          ) : (
            <div></div>
          )}
          </div>
        </div>
        <hr />
        <div className="addTodo">
          <h3>Add a task</h3>
          {/* <img src="https://www.gstatic.com/tasks/task-add-accent-light.svg"/> */}
          <Container triggerText={triggerText} />
        </div>
      </section>
    </div>
  );
}

export default App;
