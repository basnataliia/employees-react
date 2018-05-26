import React from "react"
import ReactDom from "react-dom"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Employees from "containers/employees/Employees"
import cyan from '@material-ui/core/colors/cyan'
import purple from '@material-ui/core/colors/purple'

const store = configureStore()
const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: purple
  }
})

const Index = () => {
  return (
    <Provider store={store}>
       <MuiThemeProvider theme={theme}>
        <Employees/>
       </MuiThemeProvider>
    </Provider>
  )
}


ReactDom.render(<Index/>, document.getElementById("index"));
