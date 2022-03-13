import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByRadio, searchTodoList } from "../../Redux/actions";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(searchTodoList(e.target.value));
  };
  const handleChangeRadio = (e) => {
    dispatch(filterByRadio(e.target.value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={value}
          onChange={handleChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue={"all"} onChange={handleChangeRadio}>
          <Radio value="all">All</Radio>
          <Radio value="completed">Completed</Radio>
          <Radio value="todo">To do</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
}
