import React from 'react'
import { connect } from 'react-redux';
import {get} from 'lodash'
import {NavBar, Button,ImagePicker} from 'antd-mobile'
import '../../../css/index.css'

@connect(state=>state,
{})
class UserList extends React.Component{
    constructor(props){
        super(props)
       this.state={
           files:[]
       }
    }

    finishClick=()=>{
        
        this.props.history.push('/user')
    }
    imageChange=(files,type,index)=>{
        this.setState({
            files:files
        })
    }
    render(){
        return <div>
            <NavBar>用户信息完善</NavBar>
             <div>
                 <ImagePicker
                   files={this.state.files}
                   onImageClick={(index,fs)=>console.log(index,fs)}
                   onChange={this.imageChange}
                   multiple={false}
                   selectable={this.state.files.length<1}
                   ></ImagePicker>

             </div>


            <div className="footer-fixed">
             <Button onClick={this.finishClick} type="primary" >提交</Button>
            </div>
        </div>
    }
}

export default UserList