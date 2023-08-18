import "./App.css";
import CustomInput from "./Components/CustomInput";
import ToDo from ".//Components/ToDo";
import { useState } from "react";
import { List } from "antd";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Сыр", status: false }]);
  const addTodo = (text) => {
    const updatedTasks = [...todos,{ id: todos.length + 1, title: text, status: false }];
    setTodos(updatedTasks);
  };
  return (
    <div className="App">
      <h1>What's the plan for today</h1>
      <CustomInput addTodo={addTodo} />
      <List
        size="large"
        bordered
        dataSource={todos}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    </div>
  );
};

export default App;
