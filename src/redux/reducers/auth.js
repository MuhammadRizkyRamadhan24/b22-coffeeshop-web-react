const initialState = {
    token: null,
    errMsg: '',
    msg: ''
}

const auth = (state=initialState, action) => {
    switch(action.type){
        case 'AUTH_LOGIN' : {
            return {
                ...state,
                token: action.payload.token
            }
        }
        case 'AUTH_LOGIN_FAILED': {
            return {
                ...state,
                errMsg: action.payload
            }
        }
        case 'AUTH_REGISTER' : {
            return {
                ...state,
                msg: action.payload
            }
        }
        case 'AUTH_REGISTER_FAILED' : {
            return {
                ...state,
                errMsg: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default auth