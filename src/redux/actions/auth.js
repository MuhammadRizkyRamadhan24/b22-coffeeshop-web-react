import { http } from "../../helpers/http"

const {REACT_APP_BASE_URL: URL} = process.env

export const authLogin = (email, password) => {
    return async(dispatch) =>{
        const form = new URLSearchParams()
        form.append('email', email)
        form.append('password', password)
        try{
            const {data} = await http().post(`${URL}/auth/login`, form.toString())
            dispatch({
                type:'AUTH_LOGIN',
                payload: data.results
            })
        } catch(err) {
            dispatch({
                type: 'AUTH_LOGIN_FAILED',
                payload: err.response.data.message
            })
        }
    }
}

export const authRegister = (email,phone_number,password) => {
    return async(dispatch) => {
        const form = new URLSearchParams()
        form.append('email', email)
        form.append('phone_number', phone_number)
        form.append('password', password)
        try{
            const {data} = await http().post(`${URL}/auth/register`, form.toString())
            dispatch({
                type: 'AUTH_REGISTER',
                payload: data.message
            })
        }catch (err){
            dispatch({
                type: 'AUTH_REGISTER_FAILED',
                payload: err.response.data.message
            })
        }
    }
}