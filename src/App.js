import { Container, List } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import Title from "./component/Title.jsx";
import ListItemCustom from "./component/ListItem.jsx";
import InputAdd from "./component/InputAdd.jsx";
import AlertCustom from "./component/AlertCustom.jsx";
import SearchItem from "./component/SearchItem.jsx";
import Footer from "./component/Footer.jsx";
import tasksReducer from "./component/taskReducer.js";
const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [search, setSearch] = useState();
  const [temp, setTemp] = useState([]);
  const [hide, setHide] = useState(true);
  useEffect(() => {
    if (search) {
      setTemp(() =>
        tasks.filter((t) =>
          t.text.toUpperCase().startsWith(search.toUpperCase())
        )
      );
    } else {
      setTemp(() => []);
    }
  }, [search]);
  const handleOpen = () => {
    setOpenSuccess(false);
    if (open) return;
    setOpen((open) => !open);
  };
  const handleOpenSuccess = () => {
    setOpen(false);
    if (openSuccess) return;
    setOpenSuccess((openSuc) => !openSuc);
  };
  const addTask = () => {
    if (taskText.trim() !== "") {
      dispatch({ type: "add", text: taskText, completed: false });
      setTaskText("");
      handleOpenSuccess();
    } else {
      handleOpen();
    }
  };
  const toggleTask = (index) => {
    dispatch({ type: "toggle", index: index });
  };
  const deleteTask = (index) => {
    dispatch({ type: "delete", index });
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
          Open={() => setOpen(false)}
          text={"Please Fill Your Task"}
        />
      )}
      {openSuccess && (
        <AlertCustom
          icon={"success"}
          Open={() => setOpenSuccess(false)}
          text={"Added Task"}
        />
      )}
      <Title title={"Osama-Task"} />
      <InputAdd
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={addTask}
      />
      <SearchItem
        Tasks={tasks}
        search={search}
        setSearch={setSearch}
        hide={hide}
        setHide={setHide}
      />
      {hide && (
        <List>
          {temp.length > 0 || search
            ? temp.map((task, index) => (
                <ListItemCustom
                  key={index}
                  task={task}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  index={index}
                />
              ))
            : tasks.map((task, index) => (
                <ListItemCustom
                  key={index}
                  task={task}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  index={index}
                />
              ))}
        </List>
      )}
      <Footer tasks={tasks} />
    </Container>
  );
};

export default App;
