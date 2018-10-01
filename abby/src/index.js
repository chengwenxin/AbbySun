import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login'
import Register from './components/register'
import {BrowserRouter,Route} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <div>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
