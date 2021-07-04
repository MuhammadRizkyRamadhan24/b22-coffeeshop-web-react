/* eslint-disable */
import { http } from '../../helpers/http';
const { REACT_APP_BASE_URL: URL } = process.env;

export const getDataByCategories = (id, token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/category/${id}/items`);
    dispatch({
      type: 'GET_PRODUCT',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_PRODUCT_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const getDataById = (id, token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/items/${id}`);
    dispatch({
      type: 'GET_PRODUCT_BY_ID',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_PRODUCT_BY_ID_FAILED',
      payload: err.response.data.message,
    });
  }
};
