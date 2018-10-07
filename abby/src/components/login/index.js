import React from 'react'
import axios from 'axios'
import { List, InputItem, WhiteSpace,WingBlank, Toast,Button } from 'antd-mobile';
import {connect} from 'react-redux'
import {loginSuccess,loginFailure} from './ducks'


@connect(state=>state,{loginSuccess,loginFailure})
class Login extends React.Component{
     constructor(props){
         super(props)
         this.state={
         }
     }
    //注册
    registryHandler=()=>{
        this.props.history.push('/register')
    }
    //登录
    login=()=>{
        if(!this.state.user||!this.state.password){
           return  Toast.fail("用户名或密码不能为空")
        }
        axios.post('/user/login',this.state).then(res=>{
            if(res.data.code===0){
                //将数据存入redux
                console.log('login:',res.data)
                this.props.loginSuccess(res.data)
                if(res.data.type==="admin"){
                    this.props.history.push('/adminlist')
                }else {
                    this.props.history.push('/userlist')
                }
                Toast.success(res.data.message)
            }else{
                console.log(2)

                this.props.loginFailure(res.data)
                Toast.fail(res.data.message)
            }
         })

    }
    handler=(key,value)=>{
       this.setState({
           [key]:value
       })
    }
    render() {
        return (
          <div>
                 <List>
                     <InputItem  onChange={v=>this.handler('user',v)}>姓名</InputItem>
                     <InputItem type="password" onChange={v=>this.handler('password',v)}>密码</InputItem>

                 </List>
                 <WingBlank>
                     <Button type="primary" onClick={this.login}>登录</Button>    
                     <WhiteSpace></WhiteSpace>
                     <Button type="primary" onClick={this.registryHandler}>注册</Button>    

                 </WingBlank>   
          </div>
        )
    }
}

export default Login








