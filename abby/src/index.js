import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/login'
import Register from './components/register'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import './config'
import NotFound from './components/NotFound'
import AuthRoute from './components/AuthRoute'
import AdminList from './components/List/adminList'
import UserList from './components/List/userList'
import TabBar from './components/TabBar'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import Chat from './components/Chat'
// import {persistStore,persistReducer} from 'redux-persist'
// import {PersistGate} from 'redux-persist/es/integration/react' 
// import storage from 'redux-persist/es/storage'

// let config={
//     key:'root',
//     storage
// }
// let reducer=persistReducer(config,reducers)
let store = createStore(reducers,composeWithDevTools(applyMiddleware(ReduxThunk)))
// let persistor=persistStore(store)

ReactDOM.render(
    <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <BrowserRouter>
        <div>
        <AuthRoute></AuthRoute>
         <Switch>
         <Route path='/' exact component={Login}></Route>
         <Route path='/login' exact component={Login}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Route path='/notfound' exact component={NotFound}></Route>
          <Route path='/adminlist' exact component={AdminList}></Route>
          <Route path='/userlist' exact component={UserList}></Route>
          <Route path='/chat/:user' exact component={Chat}></Route>

          <Route component={TabBar}></Route>
         </Switch>


        </div>
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
