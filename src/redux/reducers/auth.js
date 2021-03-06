const initialState = {
  token: null,
  errMsg: '',
  msg: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload.token,
        errMsg: '',
      };
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_REGISTER': {
      return {
        ...state,
        msg: action.payload,
      };
    }
    case 'AUTH_REGISTER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        msg: '',
        errMsg: '',
      };
    }
    case 'AUTH_RESET': {
      return {
        ...state,
        token: null,
        msg: '',
        errMsg: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
