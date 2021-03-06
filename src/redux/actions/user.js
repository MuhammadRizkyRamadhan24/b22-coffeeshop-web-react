import { http } from '../../helpers/http';

const { REACT_APP_BASE_URL: URL } = process.env;

export const changeUser = (token, Data) => async (dispatch) => {
  const form = new FormData();
  if (Data.image !== undefined) {
    form.append('image', Data.image[0]);
  }
  form.append('email', Data.email);
  form.append('phone_number', Data.phone_number);
  form.append('address', Data.address);
  form.append('display_name', Data.display_name);
  form.append('first_name', Data.first_name);
  form.append('last_name', Data.last_name);
  form.append('date_birth', Data.date_birth);
  form.append('gender', Data.gender);
  try {
    const { data } = await http(token).patch(`${URL}/private/profile`, form);
    dispatch({
      type: 'CHANGE_USER',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'CHANGE_USER_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const changePassword = (token, oldPassword, newPassword) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('password', oldPassword);
  form.append('newPassword', newPassword);
  try {
    const { data } = await http(token).put(`${URL}/private/profile/change_password`, form.toString());
    dispatch({
      type: 'CHANGE_PASSWORD',
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: 'CHANGE_PASSWORD_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const getUserById = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/private/profile`);
    dispatch({
      type: 'GET_USER_BY_ID',
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: 'GET_USER_BY_ID_FAILED',
      payload: err.response.data.message,
    });
  }
};

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});
