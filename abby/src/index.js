import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login'
import Register from './components/register'
import {BrowserRouter,Route} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
    </BrowserRouter>
    
    , document.getElementById('root'));
registerServiceWorker();
