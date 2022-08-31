import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function MaterialUIPickers(props) {
const date = new Date();

const month = date.toLocaleString('en-US',{month:'long'});
const day = date.toLocaleString('en-US',{day:'2-digit'});
const year = date.getFullYear();
const cTime= date.getHours() + ':' + date.getMinutes()
  
const [value, setValue] = useState(null);
  const handleChange = (newValue) => {
    setValue(newValue);
    props.result(newValue)
  };

  return ( 
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        
        
        <DateTimePicker
          label="Select Date/Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

      </Stack>
    </LocalizationProvider>
{    console.log(value)}
    </>
  );
}
