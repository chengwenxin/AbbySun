
let LOGINSUCCESS='LOGIN_SUCCESS'
let LOGINFAILURE='LOGIN_FAILURE'

 const loginSuccessAction=(payload)=>({
    type:LOGINSUCCESS,
    payload
})

const loginFailureAction=(payload)=>({
    type:LOGINFAILURE,
    payload
})

export const loginSuccess=(data)=>{
    return dispatch=>{
        dispatch(loginSuccessAction(data))
    }
}

export const loginFailure=(data)=>{
    return dispatch=>{
        dispatch(loginFailureAction(data))
    }
}


const initState={}
let user=(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
         return {...state,...action.payload}
        case 'LOGIN_FAILURE':
         return {...state,...action.payload}
        case 'LOGOUT':
         return initState
        default:
         return state
    }
}

export default user