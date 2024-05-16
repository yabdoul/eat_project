import { AUTHENTICATE_USER,SET_USER,LOGOUT_USER } from "../constants/actions";
const INITIAL_STATE = {
    user: {
        isAuthenticated: false,
        user: null
    },
};
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER :
            return {...state,user:action.payload}     
        case LOGOUT_USER :
           return {...state,user:INITIAL_STATE.user}
        default:
            return state;
    }
}
export default reducer;