import { http } from "../../helpers/http"

const {REACT_APP_BASE_URL: URL} = process.env

export const getCategory = (token) => {
    return async(dispatch) =>{
        try{
            const {data} = await http(token).get(`${URL}/category`)
            dispatch({
                type:'AUTH_CATEGORY',
                payload: data.results
            })
        } catch(err) {
            dispatch({
                type: 'AUTH_CATEGORY_FAILED',
                payload: err.response.data.message
            })
        }
    }
}