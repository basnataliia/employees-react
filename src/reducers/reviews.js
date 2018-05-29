import initialState from './initialState'
import {
  GET_REVIEWS_SUCCESS,
  SAVE_REVIEW_SUCCESS
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
    case SAVE_REVIEW_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.item),
        loaded: true
      }
    default:
      return state;
  }
}
