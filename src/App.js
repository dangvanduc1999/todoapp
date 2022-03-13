import "./App.css";
import { Typography, Divider } from "antd";
import TodoList from "./components/Todolist";
import Filters from "./components/Filters";
const { Title } = Typography;
function App() {
  return (
    <div className="wrapper">
      <Title style={{ textAlign: "center" }}>MY TODO APP</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
