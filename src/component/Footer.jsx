import { Box } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton.jsx";

const Footer = ({ tasks }) => {
  return (
    <Box
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <CustomButton
        type={"success"}
        text={`Success Tasks: ${tasks.reduce(
          (acc, task) => (task.completed ? acc + 1 : acc),
          0
        )}`}
        dis={tasks.length === 0}
      />
      <CustomButton
        type={"warning"}
        text={`Pending Tasks: ${tasks.reduce(
          (acc, task) => (!task.completed ? acc + 1 : acc),
          0
        )}`}
        dis={tasks.length === 0}
      />
      <CustomButton
        type={"primary"}
        text={`ALl Tasks: ${tasks.length}`}
        dis={tasks.length === 0}
      />
    </Box>
  );
};

export default Footer;
