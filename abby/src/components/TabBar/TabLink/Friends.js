import  React, { Component } from 'react'
import {Card,Toast} from 'antd-mobile'
import axios from 'axios'
import {connect} from 'react-redux'
import {getFriendsAction} from './ducks'
import get from 'lodash/get'
@connect(state=>state.friends,dispatch=>({
    getFriends:(data)=>{dispatch(getFriendsAction(data))}
  }))
export default class Friends extends Component {

  componentDidMount(){
      axios.get('user/friends').then(res=>{
        if(res.data.code===0){
             this.props.getFriends(res.data.data)
        }else{
             Toast.info(res.data.message)
        }

      })
  }
  friendClick=v=>{
      console.log(v)
      this.props.history.push(`/chat/${v._id}`)
  }
  render() {
    console.log(this.props)
    const friendsList=get(this.props,'list',[])
    return (
      <div>         {     friendsList.map(i=>(
              <Card key={i._id}  onClick={()=>this.friendClick(i)}>
              <Card.Header
              title={i.user}
              thumb={require('../../../img/admin-active.png')}
              >
              </Card.Header>
            </Card>
           ))
         }
      
      </div>
    )
  }
}


