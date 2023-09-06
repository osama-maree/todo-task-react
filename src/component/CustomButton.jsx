import { Button } from '@mui/material';
import React from 'react'

const CustomButton = ({type,dis,text}) => {
  return (
    <Button
      variant="contained"
      color={type}
    disabled={dis}
    >
     {text}
    </Button>
  );
}

export default CustomButton