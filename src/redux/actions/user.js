import { http } from "../../helpers/http"

const {REACT_APP_BASE_URL: URL} = process.env

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
