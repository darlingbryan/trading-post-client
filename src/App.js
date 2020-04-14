import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from "axios"
import jwtDecode from "jwt-decode"
import "./App.css"
//Redux
import { Provider } from "react-redux"
import store from "./redux/store"
import { SET_AUTHENTICATED } from "./redux/types"
import { logoutUser, getUserData } from "./redux/actions/userActions"
//Component
import Navbar from "./components/Navbar"
import AuthRoute from "./components/AuthRoute"
//Pages
import home from "./pages/home"
import login from "./pages/login"
import signup from "./pages/signup"
import transactions from "./pages/transactions"
import contacts from "./pages/contacts"
import products from "./pages/products"

const token = localStorage.FBIdToken
if (token) {
  const decodedToken = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = "/login"
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common["Authorization"] = token
    store.dispatch(getUserData())
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <AuthRoute exact path="/login" component={login} />
            <AuthRoute exact path="/signup" component={signup} />
            <Route exact path="/transactions" component={transactions} />
            <Route exact path="/contacts" component={contacts} />
            <Route exact path="/products" component={products} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
