import initialState from './initialState'
import { GET_EMPLOYEES_SUCCESS } from '../actions/actionTypes'

const employeesInitialState = {
  items: [],
  error: null,
  loaded: false
}


export default (state = employeesInitialState, action) => {
  switch(action.type) {
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        items: action.items,
        loaded: true
      }
    default:
      return state;
  }
}
