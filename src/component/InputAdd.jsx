import {
  Box,
  InputAdornment,
  ListItemSecondaryAction,
  TextField,
} from "@mui/material";
import React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

const InputAdd = ({ taskText, setTaskText, addTask }) => {
  return (
    <Box component={"div"}>
      <TextField
        label="Enter Your Task"
        fullWidth
        variant="outlined"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        InputProps={{
          startAdornment: (
            <ListItemSecondaryAction>
              <InputAdornment position="start">
                <AddTaskIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            </ListItemSecondaryAction>
          ),
        }}
      />
    </Box>
  );
};

export default InputAdd;
