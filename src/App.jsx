import "./App.css";
import CustomInput from "./Components/CustomInput";
import ToDo from "./Components/ToDo";
import { useState } from "react";
import { List, Row, Col } from "antd";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Сыр", status: false }]);

  const addTodo = (text) => {
    const updatedTasks = [
      ...todos,
      { id: todos.length + 1, title: text, status: false },
    ];
    setTodos(updatedTasks);
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
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col>
          <h1>What's the plan for today</h1>
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
              />
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
