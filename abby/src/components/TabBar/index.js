import React from 'react'
import {NavBar}from 'antd-mobile'
import TabLink from './TabLink'
import Admin from './TabLink/Admin'
import Friends from './TabLink/Friends'
import User from './TabLink/User'
import Message from './TabLink/Message'
import {Switch,Route} from 'react-router-dom'
import '../../css/index.css'
import {connect} from 'react-redux'
import {get} from 'lodash'
@connect(state=>state.user,{})
class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {

        }
    }
    render() {
        const pathname = this.props.location.pathname
        const {type}=get(this.props,'data','')
        const data = [ {
                title:'消息中心', 
                icon:'message', 
                component:Message, 
                path:'/message', 
                hide:false
            },  {
                title:'好友列表', 
                icon:'friends', 
                component:Friends, 
                path:'/friends', 
                hide:false
            },  {
                title:'管理员', 
                icon:'admin', 
                component:Admin, 
                path:'/admin', 
                hide: type !== 'admin'
            },  {
                title:'个人中心', 
                icon:'user', 
                component:User, 
                path:'/user', 
                hide:type !== 'user'
            }

        ]

        return < div > 
         < NavBar className="nav-header-fixed" >  {get(data.find(i => i.path === pathname),'title','')} </NavBar > 
        <div className="content">
        <Switch>
             {data.map(i=>
                <Route key={i.path} path={i.path} component={i.component}></Route>
                )}
          </Switch>
        </div>

         
         < TabLink  data =  {data.filter(i => ! i.hide)}    ></TabLink > 
     
           </div > 
    }
}

export default TabBar