import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ type, dis, text }) => {
  return (
    <Button
      variant="outlined"
      color={type}
      disabled={dis}
      sx={{ marginTop: "10px" }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
