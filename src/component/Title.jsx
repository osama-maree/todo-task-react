import { Typography } from '@mui/material';
import React from 'react'

const Title = ({title}) => {
  return (
    <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }} my={5}>
     {title}
    </Typography>
  );
}

export default Title