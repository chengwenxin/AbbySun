import  React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'
import get from 'lodash/get'
import {List} from 'antd-mobile'
@connect(state=>state,{})
export default class Message extends Component {
  static propTypes = {
  }
  componentDidMount(){
       axios.post('/chat/messageList',{from:this.props.user.data._id}).then(res=>{
         console.log("chatid:",res.data.data)
         this.setState({
            messageData:res.data.data
         })
       })
  }

  render() {
    const list=[]
    get(this.state,'messageData',[]).forEach(v => {
         list[v.chatid]= list[v.chatid] || []
         list[v.chatid].push(v)
     })
     console.log("list:",list)
     const keyList=[]
     for(let i in list){
        keyList.push(i)
     }
    return (
      <div>
  
          {   
            keyList.map(v=>(
              <List key={v}>
                 <List.Item>
                   {v}
                 </List.Item>
              </List>
            ))

          }

      </div>
    )
  }
}

