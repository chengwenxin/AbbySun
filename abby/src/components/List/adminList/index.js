import React from 'react'
import { connect } from 'react-redux';
import {get} from 'lodash'
import {NavBar, Button} from 'antd-mobile'
import '../../../css/index.css'

@connect(state=>({user:get(state.user,'data.user','--')}),
{}
)
class AdminList extends React.Component{
    constructor(props){
        super(props)
    }

    finishClick=()=>{
        this.props.history.push('/admin')
    }
    render(){
        return <div>
            <NavBar>管理员信息完善</NavBar>
             
            <div className="footer-fixed">
             <Button onClick={this.finishClick} type="primary" >提交</Button>
            </div>

        </div>
    }
}

export default AdminList