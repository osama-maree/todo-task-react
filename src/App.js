import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Title from "./component/Title.jsx";
import ListItemCustom from "./component/ListItem.jsx";
import InputAdd from "./component/InputAdd.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "ssss", completed: false },
    { text: "ssss", completed: false },
    { text: "ssss", completed: false },
  ]);

  const [taskText, setTaskText] = useState("");
  const addTask = () => {};
  const toggleTask = (index) => {};
  const deleteTask = (index) => {};
  return (
    <Container
      maxWidth="sm"
      sx={{ border: "1px solid #eee", borderRadius: "15px" }}
    >
      <Title title={"Osama-Task"} />

      <InputAdd
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={addTask}
      />

      <List style={{ marginTop: 5,  }}>
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
