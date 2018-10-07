import React from 'react'
import axios from 'axios'

import {List, InputItem, WhiteSpace, WingBlank, Button, Toast,Radio}from 'antd-mobile'; 
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            hasError:false, 
            user:'',
            password:'',
            phone:'12345678900',
            gender:'male',
            type:'user',
            
        }
    }
    
    //手机号错误提示
    onErrorClick = () =>  {
        if (this.state.hasError) {
          Toast.info('请输入11位有效电话号码'); 
        }
      }
      //手机号少于11位时错误提示  后续可以将函数节流和防抖进行优化
      onChange = (value) =>  {
        this.handler('phone',value)
        if (value.replace(/\s/g, '').length < 11) {
          this.setState( {
            hasError:true, 
          }); 
        }else {
          this.setState( {
            hasError:false, 
          }); 
        }
      }

      //性别change
     RadioChange=(type,value)=>{
         this.setState({
             [type]:value
         })
     }

     //注册
     register=()=>{
           console.log(this.state)
           if(!this.state.user||!this.state.password){
           return  Toast.fail("用户名或密码不能为空")
          }
           axios.post('/user/register',this.state).then(res=>{
              if(res.data.code===0){
                   this.props.history.push('/login')
                   Toast.success(res.data.message)
              }else{
                  Toast.fail(res.data.message)
              }
          })
     }

     //统一处理数据
     handler=(key,value)=>{
        this.setState({
            [key]:value
        })
     }

    render() {
        const RadioItem=Radio.RadioItem
        const genders=[
            {gender:'male',label:'男'},
            {gender:'female',label:'女'}
        ]
        const types=[
            {type:"user",label:'普通用户'},
            {type:"admin",label:'管理员'}
        ]
        return ( < div >  
        < List renderHeader="注册信息">
          < InputItem   onChange={v=>this.handler('user',v)}> 姓名 </InputItem > 
           < InputItem type = "password"   onChange={v=>this.handler('password',v)}> 密码 </InputItem > 
           < InputItem
            type = "password"
             > 确认密码 </InputItem >  
           
            < InputItem
            type = "phone"
            error =  {this.state.hasError}
            onErrorClick =  {this.onErrorClick}
            onChange =  {this.onChange}
            > 手机号码 </InputItem >  

            </List >  

            < WingBlank > 
             <List renderHeader="性别">
              {genders.map(i=>(
                  <RadioItem 
                   key={i.gender} 
                   checked={i.gender===this.state.gender}
                    onChange={()=>this.RadioChange("gender",i.gender)} >
                      {i.label}
                  </RadioItem>
              ))}

             </List>

             <List renderHeader="身份">
              {types.map(i=>(
                  <RadioItem 
                   key={i.type} 
                   checked={i.type===this.state.type}
                    onChange={()=>this.RadioChange("type",i.type)} >
                      {i.label}
                  </RadioItem>
              ))}

             </List>
              < WhiteSpace ></WhiteSpace >  
              < Button type = "primary" onClick={this.register}> 注册
               </Button >  </WingBlank >  </div > )
    }
}
export default Register







