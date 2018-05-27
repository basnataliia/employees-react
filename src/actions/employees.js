import * as types from './actionTypes';
import EmployeesApi from 'mocks/mockEmployeesApi';

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

const saveEmployeeSuccess = (item) => {
  return ({
    type: types.SAVE_EMPLOYEE_SUCCESS,
    item
  })
}

const updateEmployeeSuccess = (item) => {
  return ({
    type: types.UPDATE_EMPLOYEE_SUCCESS,
    item
  })
}

export const saveEmployee = (employee) => (dispatch) =>
   EmployeesApi.saveEmployee(employee)
          .then(result =>
            employee.id
               ?  dispatch(updateEmployeeSuccess(result))
               :  dispatch(saveEmployeeSuccess(result))
          )
          .catch(error => {
            throw(error)
          })

const deleteEmployeeSuccess = (id) => {
  return ({
    type: types.DELETE_EMPLOYEE_SUCCESS,
    id
  })
}

export const deleteEmployee = (employeeId) => (dispatch) =>
  EmployeesApi.deleteEmployee(employeeId)
          .then(() => dispatch(deleteEmployeeSuccess(employeeId)))
          .catch(error => {
            throw(error)
          })
