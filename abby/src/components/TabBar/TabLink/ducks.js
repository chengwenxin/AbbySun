export let getFriendsAction=(payload)=>({
    type:'GET_FRIENDS',
    payload
})
// export const getFriends=(data)=>{
//     console.log(3)
//     return dispatch=>{
//         console.log(4)
//         dispatch(getFriendsAction(data))
//     }
// }
export function logoutAction(){
    return {type:'LOGOUT'}
  }

const initState={}
let reducer=(state=initState,action)=>{
    switch(action.type){
        case 'GET_FRIENDS':
           return {...state,list:action.payload}
           case 'LOGOUT':
           return initState
        default:
           return state
    }
}


export default reducer
