import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
  const authenticated = useSelector((state) => state.user.authenticated)
  return (
    <AppBar>
      <Toolbar className="nav-container">
        {authenticated ? (
          <>
            <Button color="inherit" component={Link} to="/transactions">
              Transactions
            </Button>
            <Button color="inherit" component={Link} to="/contacts">
              Contacts
            </Button>
            <Button color="inherit" component={Link} to="/products">
              Products
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
