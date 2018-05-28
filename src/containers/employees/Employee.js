import React from "react"
import ReactDom from "react-dom"
import {connect} from 'react-redux'
import classNames from 'classnames'
import {withRouter} from 'react-router-dom'
import {getEmployees} from 'actions/employees'
import {getReviews} from 'actions/reviews'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Loader from 'components/Loader/Loader'
// import ReviewItem from './ReviewItem/ReviewItem'
import ReviewsList from './ReviewsList/ReviewsList'
import styles from "./styles.scss"

class Employee extends React.Component {
  
    componentDidMount() {
      this.props.getEmployees()
      this.props.getReviews()
    }

    render() {

      if(!this.props.hasLoaded) {
        return <Loader></Loader>
      }

      return (
        <div className={styles.wrapper}>
          <h1 className={styles.header}>Employee details</h1>
          <div className={classNames(styles.employeeWrapper, styles.largeFont)}>
            <img className={styles.profilePic} src={this.props.employee.profilePic} alt={this.props.employee.fullName}/>
            <span className={styles.mb}>Full Name: {this.props.employee.fullName}</span>
            <span>Job Title: {this.props.employee.position}</span>
          </div>
          <h2>Perfomance reviews</h2>
          <Divider  />
          <ReviewsList reviews={this.props.employeeReviews}/>
        </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const employee = state.employees.items.find(
        employee => employee.id === id
      ) || {}

  const employeeReviews = state.reviews.items.filter(review => review.employeeId === id)

  return {
    hasLoaded: state.employees.loaded,
    employee,
    employeeReviews
  }
}

const mapDispatchToProps = {
  getEmployees,
  getReviews
}


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Employee)
)
