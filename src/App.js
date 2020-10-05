import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ShowAppoinment from './Components/ShowAppointment/ShowAppoinment';
export const UserContext= createContext();


function App() {
  const [loggedInUser, setLoggedinUser]=useState({})

  return (
     <UserContext.Provider value={[loggedInUser, setLoggedinUser]} >
    <Container className="App">
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        <Route path="/home">
            <Home />
        </Route>
        
        <PrivateRoute  path="/register/:charityname">
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/Appoinment">
           <ShowAppoinment></ShowAppoinment>
          </Route>
        <Route  path="*">
            <NoMatch/>
        </Route>
      </Switch>
    </Router>
  </Container>
  </UserContext.Provider>  
    
  );
}

export default App;
