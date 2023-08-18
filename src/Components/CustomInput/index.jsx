import { Button, Input, Row, Col } from "antd";
import { useState } from "react";
const CustomInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <Row justify="center">
      <Col span={10}>
        <Input
          placeholder="iput task"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </Col>
      <Col style={{ flex: "none" }}>
        <Button type="primary" onClick={() => addTodo(text)}>
          Add ToDo
        </Button>
      </Col>
    </Row>
  );
};
export default CustomInput;
