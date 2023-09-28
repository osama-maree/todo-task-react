export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [...tasks, { completed: action.completed, text: action.text }];
    }
    case "toggle": {
      const updatedTasks = [...tasks];
      const newState = updatedTasks[action.index].completed;
      updatedTasks[action.index].completed = !newState;
      return updatedTasks;
    }
    case "delete": {
      return tasks.filter((t,index) => index !== action.index);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
