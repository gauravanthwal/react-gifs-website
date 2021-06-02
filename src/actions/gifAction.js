import {  SEARCH_FEED, CLEAR_FEED, SET_LOADING, LOAD_GIF } from "./types";
import axios from 'axios'



// export const gifSingle = (gifId) => async(dispatch) =>{
//     try {
//         setLoading()
//         const res = await axios.get(
//           `https://https://api.giphy.com/v1/gifs/${gifId}?api_key=uPefvDsl8sOFf93BZuJ8r6qNjudw5OXv`
//         );
//         dispatch({
//             type: LOAD_GIF,
//             payload: res.data
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }
export const searchFeed = (text) => async(dispatch) =>{
    try {
        setLoading()
        clearFeed()
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=uPefvDsl8sOFf93BZuJ8r6qNjudw5OXv&q=${text}&limit=25`
        );
        dispatch({
            type: SEARCH_FEED,
            payload: res.data.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const clearFeed = () => (dispatch) =>{
    dispatch({
        type: CLEAR_FEED
    })
}
export const setLoading = () => (dispatch) =>{
    dispatch({
        type: SET_LOADING
    })
}