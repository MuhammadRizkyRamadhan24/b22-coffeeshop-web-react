import { http } from '../../helpers/http';

const { REACT_APP_BASE_URL: URL } = process.env;

export const getHistory = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/private/transaction`);
    dispatch({
      type: 'GET_HISTORY',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_HISTORY_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const getDetailHistory = (token, id) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/private/transaction/${id}/detail`);
    dispatch({
      type: 'GET_HISTORY_DETAIL',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_HISTORY_DETAIL_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const createTransaction = (item_id, item_amount, item_variant, item_additional_price, payment_method, token) => async (dispatch) => {
  console.log(item_id);
  const form = new URLSearchParams();
  item_id.map((value) => form.append('item_id', value));
  item_amount.map((value) => form.append('item_amount', value));
  item_variant.map((value) => form.append('item_variant', value));
  item_additional_price.map((value) => form.append('item_additional_price', value));
  form.append('payment_method', payment_method);
  try {
    const { data } = await http(token).post(`${URL}/private/transaction`, form.toString());
    dispatch({
      type: 'CREATE_TRANSACTION',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'CREATE_TRANSACTION_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const deleteTransaction = (token, id) => async (dispatch) => {
  try {
    const { data } = await http(token).delete(`${URL}/private/transaction/${id}`);
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'DELETE_TRANSACTION_FAILED',
      payload: err.response.data.message,
    });
  }
};
