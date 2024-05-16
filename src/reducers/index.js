import { combineReducers } from 'redux'
import user from './user'
import global from './global'
import product from './products'

const rootReducer = combineReducers({
    user,
    global,
    product
})

export default rootReducer;