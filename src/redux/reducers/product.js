const initialState = {
  data: [],
  detailData: [],
  dataSearch: [],
  pageInfo: '',
  errMsg: '',
  msg: '',
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'GET_PRODUCT_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'GET_PRODUCT_SEARCH': {
      return {
        ...state,
        dataSearch: action.payload.results,
        pageInfo: action.payload.pageInfo,
        errMsg: ''
      };
    }
    case 'GET_PRODUCT_SEARCH_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        dataSearch: [],
        pageInfo: [],
      };
    }
    case 'GET_PRODUCT_BY_ID': {
      return {
        ...state,
        detailData: action.payload,
      };
    }
    case 'GET_PRODUCT_BY_ID_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default product;
