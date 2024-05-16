import { AUTHENTICATE_USER,IS_SUBMITED,IS_ERROR} from "../constants/actions"
import { apiClient } from "./api"
 
 
// this function allows to create a user in the database
/* The target is  : /register */
export const registerUser = (params) => dispatch => {
 
    const data = {
        ...params,
    }
    return apiClient().post(`/users/register`, data)
        .then((res) => {
        
            if(res.data.success==false){
                 dispatch({ type: IS_ERROR, payload: res.data.message })
            }else{
                
                 dispatch({ type: IS_SUBMITED, payload: true })
            }
        })
}


// this function allows user login to account
/* The target is  : /login */
export const loginUser = (params) => dispatch => {

    const data = {
        ...params
    }

    return apiClient().post(`/users/login`, data)
        .then((res) => {
            
            if(res.data.success==false){
                dispatch({ type: IS_ERROR, payload: res.data.message })
            }else{
                dispatch({ type: AUTHENTICATE_USER, payload: res.data.user })
                dispatch({ type: IS_SUBMITED, payload: true })
            }
        })
}



