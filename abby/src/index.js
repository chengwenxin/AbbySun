import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login'
import Register from './components/register'
import {Browser,Route,Switch} from 'react-router-dom'
ReactDOM.render(
    <Browser>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
    </Browser>
    
    , document.getElementById('root'));
registerServiceWorker();
