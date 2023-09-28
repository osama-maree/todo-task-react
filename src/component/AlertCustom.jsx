import { Alert, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AlertCustom = ({ icon, Open, text }) => {
  return (
    <Alert
      severity={icon}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            Open();
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {text}
    </Alert>
  );
};

export default AlertCustom;
