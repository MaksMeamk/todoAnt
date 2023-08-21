import { Input, Row, Col, List } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons'

const ToDo = ({ item, handleDelete, handleEdit }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editText, setEditText] = useState(item.title);
  const clickEdit = (item) => {
    handleEdit(item.id, editText);
    setIsEdit(!isEdit)
  }
  const actions = [
    <DeleteOutlined onClick={() => handleDelete(item.id)} />,
  ]
  if (isEdit) {
    actions.push(<SaveOutlined onClick={() => clickEdit(item)} />)
  }
  else {
    actions.push(<EditOutlined onClick={() => setIsEdit(!isEdit)} />)
  }

  return (
    <List.Item
      actions={actions}>
      <Row>
        {
          isEdit ? <Input onChange={(e) => { setEditText(e.target.value); }}
            value={editText} /> : <Col span={5}> {editText}</Col>}
      </Row>
    </List.Item>
  );
};
export default ToDo;
