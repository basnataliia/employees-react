import { combineReducers } from 'redux'
import employees from './employees'
import reviews from './reviews'


const rootReducer = combineReducers({
  employees,
  reviews
})

export default rootReducer
