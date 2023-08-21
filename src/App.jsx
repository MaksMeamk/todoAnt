import "./App.css";
import CustomInput from "./Components/CustomInput";
import ToDo from "./Components/ToDo";
import { useState } from "react";
import { List, Button, Row, Col } from "antd";


const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Сыр", status: false }]);

  const addTodo = (text) => {
    const updatedTasks = [...todos, { id: todos.length + 1, title: text, status: false }];
    setTodos(updatedTasks);
  };
  const handleDelete = (id) => {
    console.log(id);
    console.log(todos);
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos)
  }
  const handleEdit = (id, text) => {
    const newTodos = todos.map(item => item.id == id ? { ...item, title: text } : item);
    setTodos(newTodos)
  }

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
          <h1>              </h1>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={12}>
          <List
            size="middle"
            bordered
            dataSource={todos}
            renderItem={(item) => <ToDo item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
            }
          />
        </Col>
      </Row>

    </div>
  );
};

export default App;
