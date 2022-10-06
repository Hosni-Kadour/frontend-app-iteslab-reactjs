import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { Snackbar,Alert,AlertTitle } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function Form() {
  const [modified, setModified] = useState(false);
  const [person,setPerson] = useState({firstName:'',lastName:'',CIN:''})
  const [people,setPeople] = useState()
  useEffect(()=>{
    getData().then(res=>{setPeople(res.data)})
  },[]
  )
  const clear = () => {
    setPerson({firstName:'',lastName:'',CIN:''})
  }
  const handleSubmit = (event) => {
    setModified(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post("http://localhost:4000/people",person)
    console.log({
      person
    });
    clear()
  };
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
  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    profile
  </Avatar>
  <Typography component="h1" variant="h5">
    Sign in
  </Typography>
  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign In
    </Button>
    <Grid container>
      <Grid item xs>
        <Link href="people" variant="body2">
          Show people
        </Link>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  </Box>
</Box>
<Copyright sx={{ mt: 8, mb: 4 }} />
{modified && (
          <Snackbar
            open={modified}
            autoHideDuration={5000}
            onClose={() => setModified(false)}
          >
            <Alert severity="success">
              <AlertTitle></AlertTitle>
              Your update was succed — <strong>welcome to iteslab CompusElmanar!</strong>
            </Alert>
          </Snackbar>
        )}
</Container>
  );

}

export default Form;
