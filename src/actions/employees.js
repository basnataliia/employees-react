import * as types from './actionTypes';
import EmployeesApi from 'mocks/mockEmployeesApi'

const getEmployeesSuccess = (items) => {
  return ({
    type: types.GET_EMPLOYEES_SUCCESS,
    items
  })
}

export const getEmployees = () => (dispatch) =>
   EmployeesApi.getAllEmployees()
          .then(employees => {
            dispatch(getEmployeesSuccess(employees))
          })
          .catch(error => {
            throw(error)
          })
