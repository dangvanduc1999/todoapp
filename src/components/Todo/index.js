import { Row, Tag, Checkbox, Input, Select, Button } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./style.scss";
import { useDispatch } from "react-redux";
import openNotificationWithIcon from "../Toast";
import {
  deleteTodoAction,
  updateCompleted,
  updateTodoAction
} from "../../Redux/actions";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray"
};

export default function Todo({ name, prioriry, id, completed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(name);
  const [priority, setPriority] = useState(prioriry);
  // handler function
  const handleChangeValue = (e) => setValue(e.target.value);
  const handleChangePriority = (value) => setPriority(value);
  const handleClickUpdate = () => {
    dispatch(
      updateTodoAction({
        id,
        title: value,
        priority: priority,
        completed: false
      })
    );
    openNotificationWithIcon(
      "success",
      "Thành công",
      "Cập nhật todo list thành công"
    );
    setFlag(false);
  };
  const handleDeleteToDo = () => {
    dispatch(deleteTodoAction(id));
    openNotificationWithIcon(
      "success",
      "Thành công",
      "Đã xóa Todo ra khỏi list của bạn"
    );
  };
  const handleUpdateCompleted = () => {
    dispatch(updateCompleted(id));
  };
  const toggleCheckbox = () => {
    if (!checked) {
      handleUpdateCompleted();
      openNotificationWithIcon(
        "success",
        "Thành công",
        "Chúc mừng bạn hoàn thành todo"
      );
    } else {
      openNotificationWithIcon(
        "success",
        "Thành công",
        "Hoàn tác todo thành công"
      );
      handleUpdateCompleted();
    }
    setChecked(!checked);
  };
  const update = () => setFlag(true);

  return flag ? (
    <Row
      justify="space-between"
      style={{
        borderColor: priorityColorMapping[priority],
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {})
      }}
      className="todo"
    >
      <Input.Group style={{ display: "flex" }} compact>
        <Input value={value} onChange={handleChangeValue} />
        <Select defaultValue="Medium" onChange={handleChangePriority}>
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
        <Button type="primary" onClick={handleClickUpdate}>
          Update
        </Button>
      </Input.Group>
    </Row>
  ) : (
    <Row
      justify="space-between"
      style={{
        borderColor: priorityColorMapping[prioriry],
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {})
      }}
      className={checked ? "todo active" : "todo"}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {/* {name} */}
        <p className="content__todo">{name}</p>
      </Checkbox>
      <div className="todo__control">
        <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
          {prioriry}
        </Tag>
        <div className="todo__control-update">
          <DeleteOutlined onClick={handleDeleteToDo} />
          {!checked && <EditOutlined onClick={update} />}
        </div>
      </div>
    </Row>
  );
}
