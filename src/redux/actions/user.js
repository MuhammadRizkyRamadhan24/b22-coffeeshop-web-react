import { http } from "../../helpers/http"

const {REACT_APP_BASE_URL: URL} = process.env

export const changePassword = (token, oldPassword, newPassword) => {
    return async(dispatch) =>{
        const form = new URLSearchParams()
        form.append('password', oldPassword)
        form.append('newPassword', newPassword)
        try{
            const {data} = await http(token).put(`${URL}/private/profile/change_password`, form.toString())
            dispatch({
                type:'CHANGE_PASSWORD',
                payload: data.message
            })
        } catch(err) {
            dispatch({
                type: 'CHANGE_PASSWORD_FAILED',
                payload: err.response.data.message
            })
        }
    }
}

export const getUserById = (token) => {
    return async(dispatch) =>{
        try{
            const {data} = await http(token).get(`${URL}/private/profile`)
            dispatch({
                type:'GET_USER_BY_ID',
                payload: data.results
            })
        } catch(err) {
            dispatch({
                type: 'GET_USER_BY_ID_FAILED',
                payload: err.response.data.message
            })
        }
    }
}
