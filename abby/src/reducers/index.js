import {combineReducers} from 'redux'
import friends from '../components/TabBar/TabLink/ducks'
import chat from '../components/Chat/ducks'
import user from '../components/login/ducks'

export default combineReducers({friends,user,chat})