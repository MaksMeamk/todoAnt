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
      message: "Done",
    });
    console.log(updatedTasks);
  };
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    console.log(newTodos);
  };
  const handleEdit = (id, text) => {
    const newTodos = todos.map((item) =>
      item.id == id ? { ...item, title: text } : item
    );
    setTodos(newTodos);
    message.open({
      type: "success",
      content: "This is a success addition",
    });
  };
  const changeStatus = (id) => {
    const newTodos = todos.map((item) =>
      item.id == id ? { ...item, status: !item.status } : item
    );
    setTodos(newTodos);
    message.open({
      type: "success",
      content: "This is a success execution",
    });
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col>
          <h1>What's the plan for today. Tasks: {todos.length}</h1>
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
