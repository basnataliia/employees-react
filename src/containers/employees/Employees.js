import React from "react"
import ReactDom from "react-dom"
import {connect} from 'react-redux'
import {getEmployees, deleteEmployee} from 'actions/employees'
import {withModal} from 'components/withModal/withModal'
import EmployeeModal from 'containers/employees/modals/EmployeeModal'
import Loader from 'components/Loader/Loader'
import List from 'components/List/List'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from "./styles.scss"

class Employees extends React.Component {
    state = {
      searchQuery: ''
    }

    componentDidMount() {
      this.props.getEmployees();
    }

    onSearchSubmit = event => {
      this.setState({
        searchQuery: event.target.value
      })
    }

    handleDeleteEmployee = (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this employer?")
      if(confirmDelete) {
        this.props.deleteEmployee(id)
      }
    }

    render() {
      const queriedEmployees = this.state.searchQuery
            ? this.props.employees.filter(employee =>
              employee.fullName.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            )
            : this.props.employees

      if(!this.props.hasLoaded) {
        return <Loader></Loader>
      }

      return (
        <div className={styles.wrapper}>
          <h1 className={styles.header}>Employees</h1>
          <div className={styles.actionItemsWrapper}>
          <TextField
            id="search"
            label="Search Employer by name"
            type="search"
            className={styles.textField}
            margin="normal"
            onChange={this.onSearchSubmit}
          />
          <Button
            variant="raised"
            color="primary"
            className={styles.primaryButton}
            onClick={this.props.openModal}>
            Add new employee
          </Button>
         </div>
         <List
           hasModal
           items={queriedEmployees}
           handleDeleteEmployee={this.handleDeleteEmployee}
         />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    hasLoaded: state.employees.loaded,
    employees: state.employees.items ? state.employees.items : []
  }
}

const mapDispatchToProps = {
  getEmployees,
  deleteEmployee
}

const isNew = true;
const WrappedComponent = withModal(Employees, EmployeeModal, isNew);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
