/*import logo from './logo.svg';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './App.css';

const getData = async() => {
  const data = await axios.get("http://localhost:4000/people");
  return data
}

function App() {
  const [person,setPerson] = useState({firstName:'',lastName:'',CIN:''})
  const [people,setPeople] = useState()
  useEffect(()=>{
    getData().then(res=>{setPeople(res.data)})
  },[]
  )
  return (
    <div className="App">
      <form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">First Name:</label>
    <input value={person.firstName} onChange={(e)=>{setPerson({...person,firstName:e.target.value})}} id="fname" name="user_name"/>
  </li>
  <li>
    <label for="name">Last Name:</label>
    <input value={person.lastName} onChange={(e)=>{setPerson({...person,lastName:e.target.value})}} id="lname" name="user_lname"/>
  </li>
  <li>
  <label for="name">CIN:</label>
    <input value={person.CIN} onChange={(e)=>{setPerson({...person,CIN:e.target.value})}} id="CIN" name="user_cin"/>
  </li>
  <li>
    <button style={{height:40,width:60,marginLeft:200}} onClick={()=>axios.post("http://localhost:4000/people",person)}>submit</button>
  </li>
 </ul>
</form>
{people?.map((someone)=><>
  <h5 style={{marginLeft:500}} >{someone.firstName} {someone.lastName}</h5><h5 style={{marginLeft:700}}>CIN: {someone.CIN}</h5></>)}
    </div>
  );
}

export default App;*/

import logo from './logo.svg';
import axios from "axios";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './App.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Form from './Components/Form';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import People from './Components/People';

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

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route index element={<Form />} />
            <Route exact path="/people" element={<People />} />
          </Routes>
          
        </BrowserRouter>
  );

}

export default App;

/*
<BrowserRouter>
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route index element={<Products />} />
            <Route exact path="/:id" element={<Products />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/fruits" element={<Products />} />
            <Route exact path="/decoration/:id" element={<Products />} />
            <Route exact path="/decoration" element={<Products />} />
            <Route exact path="/vegetables" element={<Products />} />
            <Route exact path="/vegetables/:id" element={<Products />} />
            <Route exact path="/oliviers" element={<Products />} />
            <Route exact path="/oliviers/:id" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/request" element={<Request />} />
            <Route exact path="/auth" element={<Auth user={user} setUser={setUser}/>} />
          </Routes>
        </BrowserRouter>
*/
