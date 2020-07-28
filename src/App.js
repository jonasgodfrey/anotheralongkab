import React, { Component } from 'react'
// import Header from './Layout/Header'
// import Menu from './Layout/Menu'
// import Footer from './Layout/Footer'
// import Dashboard from './Views/Dashboard'
// import Drivers from './Views/Drivers'
// import Users from './Views/Users'
// import KabRoutes from './Views/KabRoutes'
import Login from './Auth/Login'
// import Register from './Auth/Register'
// import Home from './Login/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
import Selfroute from './Selfroute'


export default class App extends Component {


  render() {

  
    return (
      
       
      <Router>

      <div>
     
     <Selfroute/>
      
      {/* <Route path="/login" exact component={Login} />     */}
      
   
      </div>

      </Router>
    )
    }
  
  }

