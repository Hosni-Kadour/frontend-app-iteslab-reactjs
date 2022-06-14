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
import Person from "./person/Person";

const getData = async() => {
  const data = await axios.get("http://localhost:4000/people");
  return data
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function People() {
  //const [person,setPerson] = useState({firstName:'',lastName:'',CIN:''})
  const [people,setPeople] = useState()
  useEffect(()=>{
    getData().then(res=>{setPeople(res.data)})
  },[]
  )
  return (
<Container component="main" maxWidth="xs">
<CssBaseline />
<Box
  sx={{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  {people?.map((someone)=>
    <Person someone={someone}/>)}
</Box>
</Container>
  );

}

export default People;