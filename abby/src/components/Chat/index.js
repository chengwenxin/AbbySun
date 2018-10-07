import React,  {Component }from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {NavBar, List, TextareaItem, Button, Flex, InputItem}from 'antd-mobile'
import '../../css/index.css'
import io from 'socket.io-client'
import {connect}from 'react-redux'
import get from 'lodash/get'
import {msgListAction,sendMsgAction,msgRecvAction}from  './ducks'
const socket = io('ws://localhost:8888')

   
@connect(state => state, dispatch => ( {
  sendMsg:data=>dispatch(sendMsgAction(data)),
  recvMsg:data=>dispatch(msgRecvAction(data)),
  getMsgList:data => dispatch(msgListAction(data))}))
export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      text:'', 
      message:[], 
    }
  }
  componentDidMount() {
    //设置监听
     socket.on('recieve'+this.props.user.data._id, data =>  {
       this.props.recvMsg(data)
     })

  }
  keySend=(e)=>{
      if(e.keyCode===13){
        this.send()
      }
  }
  send = () =>  {
    if(this.state.text){
       const  from=this.props.user.data._id,
              to =this.props.match.params.user,
              content=this.state.text;
       //将自己发送的消息存入redux
       this.props.sendMsg({from,to,content})
       socket.emit('send', {from,to,content})
       this.setState({
       text:''
       })
    }
  }
  render() {
    const  messageList= get(this.props,'chat.chatMessage',[])
    const  userid=this.props.match.params.user

    return ( < div > 
     < NavBar className = "nav-header-fixed" > 
       {userid} 
     </NavBar >  
     <div className="content">
          {
            messageList.filter(v=>(v.from===userid||v.to===userid)).map((v,index) =>
                 {    
                   return v.from!==userid?
                  <List  key = {index} > <List.Item    extra='me'  className="chat-me"    >{v.content} </List.Item ></List> :
                  <List  key = {index} > <List.Item  >{v.content} </List.Item ></List>
                 }
            )
          }
     </div>
      < div className = "footer-fixed"
            style =  { {display:'flex', flexWrap:'nowrap', justifyContent:"space-between"}} >
            < List >
                < InputItem
                   placeholder = "输入"
                   onChange =  {v =>  {
                   this.setState( {text:v})
                   }}
                  onKeyDown={this.keySend}
                  value =  {this.state.text}
                  extra =  { < span onClick =  {this.send} > 发送 </span > } >
                </InputItem >
            </List >
       </div >
    </div > )
  }
}
