import { Button } from '@mui/material';
import React from 'react'

const CustomButton = ({type,fun}) => {
  return (
    <Button
      variant="contained"
      color={type}
      onClick={fun}
      style={{ marginTop: "10px" }}
    >
      Show All
    </Button>
  );
}

export default CustomButton