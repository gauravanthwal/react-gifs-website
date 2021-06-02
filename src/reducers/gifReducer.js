import {LOAD_FEED, SEARCH_FEED, CLEAR_FEED, SET_LOADING} from '../actions/types'

const initialState = {
    giphs: [],
    loading: false,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default  (state=initialState, action) =>{
    switch(action.type){
        case LOAD_FEED:
            return{
                ...state,
                giphs: action.payload,
                loading: false
            }
        case SEARCH_FEED:
            return{
                ...state,
                giphs: action.payload,
                loading: false
            }
        case CLEAR_FEED:
            return{
                ...state,
                giphs: []
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
} 