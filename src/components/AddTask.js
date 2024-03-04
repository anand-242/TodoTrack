import React from "react";

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((todo) =>
        todo.id === task.id ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleDateString()}${date.toLocaleTimeString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()}${date.toLocaleTimeString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task?.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength={30}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task && task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
