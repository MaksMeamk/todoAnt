import { Input, Button, Row, Col } from "antd";
import { useState } from "react";
const ToDo = (title) => {
  const [text, setText] = useState("");
  return (
    <Row justify="center">
      <Col span={10}> {title} </Col>
      <Col span={5} style={{ flex: "none" }}>
        <Button>Change</Button>{" "}
      </Col>
      <Col span={5} style={{ flex: "none" }}>
        <Button>Delete</Button>{" "}
      </Col>
    </Row>
  );
};
export default ToDo;
