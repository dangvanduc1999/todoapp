import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../Redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector } from "../../Redux/selectors";
import openNotificationWithIcon from "../Toast";
import "./style.scss";
export default function TodoList() {
  // state and action redux
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  //   state
  const [todoAdd, setTodoAdd] = useState("");
  const [piority, setPiority] = useState("Medium");
  //  =====  handleFunction=====
  const handleAddToDo = () => {
    if (!todoAdd.trim()) {
      openNotificationWithIcon(
        "warning",
        "Nhăc nhở",
        "Bạn phải nhập nội dung của todo"
      );
      return null;
    }
    dispatch(
      addTodoAction({
        todo: {
          id: uuidv4(),
          title: todoAdd,
          priority: piority,
          completed: false
        }
      })
    );
    openNotificationWithIcon(
      "success",
      "Thành công",
      "Thêm todo thành công !!"
    );
    setTodoAdd("");
  };
  const handleChangeTodo = (e) => setTodoAdd(e.target.value);
  const handleChangePriority = (value) => setPiority(value);
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col
        span={24}
        style={{
          height: 327,
          overflowY: "auto",
          overflowX: "hidden"
        }}
        className="totolist"
      >
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.title}
            prioriry={todo.priority}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoAdd} onChange={handleChangeTodo} />
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
          <Button type="primary" onClick={handleAddToDo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
