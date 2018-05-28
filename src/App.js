import React from "react"
import { withRouter, Switch, Redirect, Route } from 'react-router-dom'
import Employees from "containers/employees/Employees"
import Employee from "containers/employees/Employee"

const App = () => {
  return (
    <Switch>
      <Route exact path='/employees' component={Employees}/>
      <Route path='/employees/:id' component={Employee}/>
      <Route exact path="/" render={() => <Redirect to="/employees" />} />
    </Switch>
  )
}

export default App;
