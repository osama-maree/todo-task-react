import { Alert, Container, IconButton, List } from "@mui/material";
import React, { useState } from "react";
import Title from "./component/Title.jsx";
import ListItemCustom from "./component/ListItem.jsx";
import InputAdd from "./component/InputAdd.jsx";
import CloseIcon from "@mui/icons-material/Close";
import AlertCustom from "./component/AlertCustom.jsx";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [taskText, setTaskText] = useState("");
  const handleOpen = () => setOpen((open) => !open);
  const handleOpenSuccess = () => setOpenSuccess((open) => !open);
  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
      setOpenSuccess((open) => !open);
    } else {
      handleOpen();
    }
  };
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        border: "1px solid #eee",
        borderRadius: "15px",
        paddingTop: "10px",
      }}
    >
      {open && (
        <AlertCustom
          icon={"error"}
          Open={handleOpen}
          text={"Please Fill Your Task"}
        />
      )}
      {openSuccess && (
        <AlertCustom
          icon={"success"}
          Open={handleOpenSuccess}
          text={"Added Task"}
        />
      )}
      <Title title={"Osama-Task"} />
      <InputAdd
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={addTask}
      />

      <List>
        {tasks.map((task, index) => (
          <ListItemCustom
            key={index}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </List>
    </Container>
  );
};

export default App;
