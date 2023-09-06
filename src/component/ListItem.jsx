import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React from "react";

const ListItemCustom = ({ task, toggleTask, index, deleteTask }) => {
  return (
    <ListItem dense button>
      <Checkbox
        edge="start"
        checked={task.completed}
        tabIndex={-1}
        disableRipple
        onClick={() => toggleTask(index)}
      />
      <ListItemText primary={task.text} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => deleteTask(index)}
        >
          <span role="img" aria-label="delete" className="MuiIconButton-label">
            🗑️
          </span>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemCustom;
