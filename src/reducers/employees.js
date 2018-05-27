import initialState from './initialState'
import {
  GET_EMPLOYEES_SUCCESS,
  SAVE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS
} from '../actions/actionTypes'

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
    case SAVE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.item),
        loaded: true
      }
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        items: state.items.map(item =>
             item.id !== action.item.id
               ? item
               : action.item),
        loaded: true
      }
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item =>
          item.id !== action.id),
        loaded: true
      }
    default:
      return state;
  }
}
