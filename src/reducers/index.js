import { combineReducers } from 'redux'
import gifReducer from './gifReducer'

const rootReducer = combineReducers({
    giph: gifReducer
})
export default rootReducer;
