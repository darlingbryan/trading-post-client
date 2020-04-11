import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" component={Link} to="/transactions">
          Transactions
        </Button>
        <Button color="inherit" component={Link} to="/contacts">
          Contacts
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
