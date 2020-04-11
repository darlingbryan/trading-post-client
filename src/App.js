import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"

//Redux
import { Provider } from "react-redux"
import store from "./redux/store"
//Component
import Navbar from "./components/Navbar"
//Pages
import home from "./pages/home"
import login from "./pages/login"
import transactions from "./pages/transactions"
import contacts from "./pages/contacts"
import products from "./pages/products"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
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
