import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// MUI Stuff
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
// Redux stuff
import { useDispatch, useSelector } from "react-redux"
import { signupUser } from "../redux/actions/userActions"

function SignupPage({ history }) {
  const dispatch = useDispatch()
  const [handle, setHandle] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({})

  const UI = useSelector((state) => state.UI)

  useEffect(() => {
    setErrors(UI.errors)
  }, [UI.errors])

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      handle,
      email,
      password,
      confirmPassword,
    }
    console.log(userData)
    dispatch(signupUser(userData, history))
  }

  return (
    <Grid container>
      <Grid item sm />
      <Grid item sm>
        <Typography variant="h2">Signup</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="handle"
            name="handle"
            type="text"
            label="Handle"
            helperText={errors.handle}
            error={errors.handle ? true : false}
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            fullWidth
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Password"
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
          {errors.general && (
            <Typography variant="body2">{errors.general}</Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={UI.loading}
          >
            Signup
            {UI.loading && <p>loading</p>}
          </Button>
          <br />
          <small>
            have an account already ? login <Link to="/login">here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  )
}

export default SignupPage
