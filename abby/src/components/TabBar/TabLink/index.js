import React from 'react'
import {TabBar,Badge} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import '../../../css/index.css'
import { connect } from 'react-redux';
import get from 'lodash/get'

@withRouter
@connect(state=>state)
class TabLink extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        console.log(this.props)
        const data=this.props.data
        const pathname=this.props.location.pathname
        return    <div  className="footer-fixed">
        <TabBar  >
            {data.map(i=>(
                <TabBar.Item
                   badge={i.path==='/message'?get(this.props,'chat.unread',5):0}
                   title={i.title}
                   key={i.path}
                   icon={{uri:require(`../../../img/${i.icon}.png`)}}
                   selectedIcon={{uri:require(`../../../img/${i.icon}-active.png`)}}
                   selected={pathname===i.path}
                   onPress={()=>{
                       this.props.history.push(i.path)
                   }}
                >
                {/* <Badge text={get(this.state,'chat.chatMessage.unread','')}></Badge> */}
                </TabBar.Item>
            ))}
          </TabBar></div>
    
    }
}

export default TabLink