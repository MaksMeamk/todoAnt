import { Input, Row, Col, List, Popconfirm, Checkbox } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

const ToDo = ({ item, handleDelete, handleEdit, changeStatus }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(item.title);
  const clickEdit = (item) => {
    handleEdit(item.id, editText);
    setIsEdit(!isEdit);
  };
  const actions = [
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={() => handleDelete(item.id)}
      okText="Yes"
      cancelText="No"
    >
      <DeleteOutlined />
    </Popconfirm>,
  ];
  if (isEdit) {
    actions.push(<SaveOutlined onClick={() => clickEdit(item)} />);
  } else {
    actions.push(<EditOutlined onClick={() => setIsEdit(!isEdit)} />);
  }
  

  return (
    <List.Item actions={actions}>
      <Row>
        {isEdit ? (
          <Input
            onPressEnter={() => clickEdit(item)}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
            value={editText}
          />
        ) : (
          <Col span={5}>
            <Checkbox
              onChange={(e) => changeStatus(item.id, e.target.checked)}              
            >
              {item.status ? (
                <span style={{ textDecoration: "line-through" }}>
                  {editText}
                </span>
              ) : (
                editText
              )}
            </Checkbox>
          </Col>
        )}
      </Row>
    </List.Item>
  );
};
export default ToDo;
