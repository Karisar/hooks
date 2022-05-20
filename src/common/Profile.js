import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

export default function () {
  return (
    <Paper elevation={3}
    style={{
      width: 500,
      padding: 50,
      margin: 50
    }}>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          width: 128,
          height: 400,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Firstname" variant="outlined" />
        <TextField id="outlined-basic" label="Lastname" variant="outlined" />
        <TextField id="outlined-basic" label="SSN" variant="outlined" />

      </Box>
    </Paper>

  );
}
