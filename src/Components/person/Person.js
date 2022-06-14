import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Person({someone}) {
  const [person,setPerson] = useState({firstName:someone.firstName,lastName:someone.lastName,CIN:someone.CIN})
  return (
  <Stack
  spacing={2}
    direction="row">
    <TextField
      margin="normal"
      fullWidth
      id="firstName"
      variant="standard"
      value={person.firstName}
      onChange={(e)=>{setPerson({...person,firstName:e.target.value})}}
      label="First Name"
      name="firstName"
      autoComplete="firstName"
      autoFocus
    />
    <TextField
      margin="normal"
      fullWidth
      id="lastName"
      variant="standard"
      value={person.lastName}
      onChange={(e)=>{setPerson({...person,lastName:e.target.value})}}
      label="Last Name"
      name="lastName"
      autoComplete="lastName"
      autoFocus
    />
    <TextField
      margin="normal"
      fullWidth
      id="CIN"
      variant="standard"
      value={person.CIN}
      onChange={(e)=>{setPerson({...person,CIN:e.target.value})}}
      label="Number CI"
      name="CIN"
      autoComplete="CIN"
      autoFocus
    />
    <Button
      onClick={async()=> await axios.patch(`http://localhost:4000/people/${someone._id}`,person)}
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, height:50,width:400 }}
    >
      Modify
    </Button>
    </Stack>
  );

}

export default Person;