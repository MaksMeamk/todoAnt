import { Button, Input, Row, Col } from "antd";
import { useState } from "react";

const CustomInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Row justify="center">
      <Col span={10}>
        <Input
          onPressEnter={handleClick}
          placeholder="INPUT TASK"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </Col>
      <Col style={{ flex: "none" }}>
        <Button type="primary" onClick={() => handleClick()}>
          Add ToDo
        </Button>
      </Col>
    </Row>
  );
};
export default CustomInput;
