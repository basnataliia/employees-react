import React from "react"
import ReactDom from "react-dom"
import {connect} from 'react-redux'
import styles from "./styles.scss"
import store from 'store/configureStore'
import { getEmployees } from 'actions/employees'
import Loader from 'components/Loader/Loader'
import List from 'components/List/List'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
          <Button variant="raised" color="primary" className={styles.primaryButton}>
            Add new employee
          </Button>
         </div>
         <List employees={queriedEmployees}/>
        </div>
      )
    }

}

const mapStateToProps = (state) => {
  return {
    hasLoaded: state.employees.loaded,
    employees: state.employees.items ? state.employees.items : []
  };
}

const mapDispatchToProps = {
  getEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
