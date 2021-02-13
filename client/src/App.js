import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './core/components/Dashboard/index';
import { PrivateRoute } from './core/components/PrivateRoute.js';
import Login from './core/components/Login/index';
import Signup from './core/components/Signup/index';

class App extends Component {
    render() {
    return (
    <div className="App">
        <div className="App-content">
            <Switch>  
                <Route exact path="/" component={Login}/>
                <Route exact path ="/signup" component={Signup}/>
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    </div>
    );
}
}
export default App;