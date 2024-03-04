import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState(null);
  const [tasklist, setTasklist] = useState(() => {
    try {
      const storedTasklist = localStorage.getItem("tasklist");
      return storedTasklist ? JSON.parse(storedTasklist) : [];
    } catch (error) {
      console.error("Error parsing tasklist from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
