/* eslint-disable jsx-a11y/alt-text */

import './App.css';
import  topCorner  from'./Images/1.png';
import MiddleImage from './Images/2-removebg-preview.png';
import SerchButton from '@material-ui/icons/SearchOutlined';

import React,{ useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
function App() {
 

//console.log('data:',data);
  return (
    <div className="App">
     <Router>
     <Switch>
       <Route exact path="/">
         <Home data/>
       </Route>
       <Route    path='/player/:playerName'>
        <Profile />
     </Route>

     </Switch>
     </Router>
    </div>
  )  
}

export default App;
