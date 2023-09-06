import { Typography } from '@mui/material';
import React from 'react'

const Title = ({title}) => {
  return (
    <Typography variant="h3" className='small-text' gutterBottom sx={{ textAlign: "center" }} my={5}>
     {title}
    </Typography>
  );
}

export default Title