import  React,  {Component }from 'react'
import PropTypes from 'prop-types'
import {Button, List }from 'antd-mobile'; 
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import {logoutAction} from './ducks'
@withRouter
@connect(state=>state,dispatch=>({
  logout:()=>{
    dispatch(logoutAction())
  }
}))
export default class User extends Component {
  static propTypes =  {
  }

  render() {
    const Item=List.Item
    const {user,type,gender,phone}=this.props.user.data
    const list=[user,type,gender,phone]
    // const list=[{label:'姓名',user},{label:'性别'}]
    return (
      <div>
            <div className="content">
                {list.map((v,index)=>(
                     <List key={index}>   <Item>
                        {v}
                     </Item>  </List>
                ))}
            </div>
            <div >
               < Button type="primary" onClick =  {() =>  {
               this.props.logout()
               this.props.history.push('/login')
               }} > 退出登录 </Button >
            </div>
      </div >
    )
  }
}
