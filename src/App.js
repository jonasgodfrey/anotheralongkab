import React, { Component } from 'react'
import Header from './Layout/Header'
import Menu from './Layout/Menu'
import Footer from './Layout/Footer'
import Dashboard from './Views/Dashboard'
import Drivers from './Views/Drivers'
import Users from './Views/Users'
import KabRoutes from './Views/KabRoutes'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Home from './Login/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
         isloggedin: true
    }
}
  render() {

    if(this.state.isloggedin == true){
    return (
      
       
      <Router>
      <div>
      <Header/>
      <Switch>
      
      <Route path="/" exact component={Dashboard} />    
      
      <Route path="/drivers" component={Drivers} /> 
         
      <Route path="/users" component={Users} /> 
      <Route path="/kabroutes" component={KabRoutes} />
      {/* <Route path="/login" component={Login} />  */}
      {/* <Route path="/" component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />  */}
      {/* <Route path="/register" component={Register} />
      
      <Route path="/test" component={Test} /> */}
      {/* <Route path="/" exact component={Login} />     */}
      {/* <Route path="/Login" component={Login} /> */}
      {/* <Route path="/home" component={Home} />  */}
    
      </Switch>
      <Menu/>
      <Footer/>
      </div>

      </Router>
    )
    }
    else{
      return (
        <Router>
        <Switch>
        <Route path="/login" component={Login} /> 
          {/* <Redirect from="/" to="/login" /> */}
        </Switch>
      </Router>
    )
    }
  }
}
