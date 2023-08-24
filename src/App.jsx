import "./App.css";
import CustomInput from "./Components/CustomInput";
import ToDo from "./Components/ToDo";
import { useState } from "react";
import { List, Row, Col, notification, message } from "antd";
import { v4 as uuid } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Сыр", status: false }]);

  const addTodo = (text) => {
    const updatedTasks = [...todos, { id: uuid(), title: text, status: false }];
    setTodos(updatedTasks);

    notification.open({
      type: "success",
      message: "added successfully",
    });
  };
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  const handleEdit = (id, text) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, title: text } : item
    );
    setTodos(newTodos);
    message.open({
      type: "success",
      content: "This is a success addition",
    });
  };

  const changeStatus = (id, stat) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, status: stat } : item
    );
    const sortnewTodos = [
      ...newTodos.filter((item) => item.status === false),
      ...newTodos.filter((item) => item.status === true),
    ];
    setTodos(sortnewTodos);
    stat
      ? message.success({ content: "Task completed" })
      : message.warning({ content: "Cancel a task" });
  };

  let leftTasks = todos.filter((item) => item.status === false).length;
  let readyTasks = todos.filter((item) => item.status === true).length;

  return (
    <div className="App">
      <Row justify="center">
        <Col>
          <h1>What's the plan for today.</h1>
          <h2>
            Total Tasks:{todos.length}{" "}
            <span style={{ color: "red" }}>Tasks left:{leftTasks}</span>{" "}
            <span style={{ color: "green" }}>
              Tasks ready:
              {readyTasks}
            </span>
          </h2>
        </Col>
      </Row>
      <CustomInput addTodo={addTodo} />
      <Row justify="center">
        <Col>
          <h1> </h1>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={12}>
          <List
            size="middle"
            bordered
            dataSource={todos}
            renderItem={(item) => (
              <ToDo
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                changeStatus={changeStatus}
              />
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
