import initialState from './initialState'
import {
  GET_REVIEWS_SUCCESS
} from '../actions/actionTypes'

const reviewsInitialState = {
  items: [],
  error: null,
  loaded: false
}


export default (state = reviewsInitialState, action) => {
  switch(action.type) {
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loaded: true
      }
    default:
      return state;
  }
}
