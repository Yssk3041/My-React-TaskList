import Header from "./components/header";
import { tasklist } from "./taskList";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList List={tasklist} />
    </div>
  );
}

export default App;
