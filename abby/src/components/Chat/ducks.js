import axios from 'axios'

// 获取聊天列表
const MSG_LIST = "MSG_LIST"
// 读取信息
const MSG_RECV = "MSG_RECV"
// 标识已读
const MSG_READ = "MSG_READ"
const SEND_MSG = "SEND_MSG"
//acions
export const msgListAction = (payload) => ( {
    type:MSG_LIST, 
    payload
})
export const msgRecvAction = (payload) => ( {
    type:MSG_RECV, 
    payload
})
export const msgReadAction = (payload) => ( {
    type:MSG_READ, 
    payload
})
export const sendMsgAction = (payload) => ( {
    type:SEND_MSG, 
    payload
})

//funcions
// export const getMsgList=()=>{
//     return dispatch=>{
//         axios.get('/chat/messagelist').then(res=>{
//             if(res.status===200){
//                 dispatch(res.data.data)
//             }else{
//                 console.log('axios err')
//             }
//         })
//     }
// }

const initState =  {unread:0, chatMessage:[]}
 const chat = (state = initState, action) =>  {
    switch (action.type) {
        case MSG_LIST:
           return {...state, chatMessage:action.payload}
        case SEND_MSG:
           return {...state, chatMessage:[...state.chatMessage, action.payload]}
        case 'LOGOUT':
            return initState
        case MSG_RECV:
            return {...state, chatMessage:[...state.chatMessage, action.payload],
                unread:state.unread + 1}
        // case MSG_READ:
        default:
        return state
    }
}

export default chat