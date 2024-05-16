import { TOGGLE_LOADING } from "../constants/actions";
import {store} from "../store";
import axios from "axios"
import { BASE_URL } from "../components/config/keys";

export const apiClient = () => {
    const options = {
        baseURL: BASE_URL,
        responseType: 'json',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':"*/*"
        },
    }
    const instance = axios.create(options)

    instance.interceptors.request.use((request) => {
        store.dispatch({
            type: TOGGLE_LOADING,
            payload: true
        })
        return request
    })

    instance.interceptors.response.use(
        (response) => {
            store.dispatch({
                type: TOGGLE_LOADING,
                payload: false
            })
            return response
        },
        (error) => {
           
            store.dispatch({
                type: TOGGLE_LOADING,
                payload: false
            })
            return Promise.reject(error);
        },
    )

    return instance
}