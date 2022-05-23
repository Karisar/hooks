import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

export default function () {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [ssn, setSsn] = useState('');

  // more efficient if outside of the funtion component, as it's now recreated on every render
  const validateSsn = () => {
    return ssn.length > 10;
  }

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
        <TextField id="outlined-basic" label="Firstname" variant="outlined" onChange={e => setFirstname(e.target.value)}/>
        <TextField id="outlined-basic" label="Lastname" variant="outlined" onChange={e => setLastname(e.target.value)}/>
        <TextField id="outlined-basic" label="SSN" variant="outlined" onChange={e => setSsn(e.target.value)} error={!validateSsn()} helperText={validateSsn() ? '' : 'ssn too short'}/>
        <p>firstname: {firstname}, lastname: {lastname}, ssn: {ssn}</p>
      </Box>
    </Paper>

  );
}
