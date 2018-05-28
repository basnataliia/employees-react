import React from "react"
import ReactDom from "react-dom"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from "./App"
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
          <HashRouter>
            <App/>
         </HashRouter>
       </MuiThemeProvider>
    </Provider>
  )
}


ReactDom.render(<Index/>, document.getElementById("index"));
