import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Toast} from 'antd-mobile'
import { connect } from 'react-redux';
import get from 'lodash/get'
@withRouter
@connect(state=>state.user,{})
class AuthRoute extends React.Component{

    componentDidMount(){
          const code=get(this.props,'code',null)
          console.log('code:',code)
          if(code===0){
          }else{
            Toast.fail("未登录")
            this.props.history.push('/login')
          }

        //  axios.get('/user/info').then(res=>{
        //      let path=['/','/login','/register','/userlist','/adminlist','/admin','/user','/message','/friends']
        //      if(res.status===200){
        //          console.log("res.code:",res.data.code)
        //         if(res.data.code===0){
        //             console.log(this.props)
        //             if(path.indexOf(this.props.location.pathname)>-1){
        //                 this.props.history.push(this.props.location.pathname)
        //             }else{
        //                 this.props.history.push('/notfound')
        //               // this.props.history.push(this.props.location.pathname)

        //             }
        //       }else{
        //          Toast.fail("未登录")
        //          this.props.history.push('/login')
        //       }
         
        //     }
        //  })
    }
    render(){
        return <div></div>
    }
}

export default AuthRoute;