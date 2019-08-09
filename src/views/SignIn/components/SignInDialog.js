import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  button: {
    backgroundColor: 'grey',
    color: '#f2f2f2',
  },
})

const SignInDialog = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleSetUserName(event) {
    setUserName(event.target.value)
  }

  function handleSetPassword(event) {
    setPassword(event.target.value)
  }

  return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog open={open} aria-labelledby="dialog-title" onClose={handleClose}>
        <DialogTitle id="dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              label="Username"
              value={userName}
              name="Username"
              onChange={handleSetUserName}
            />
          </div>
          <div>
            <TextField
              label="Password"
              name="password"
              value={password}
              onChange={handleSetPassword}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default SignInDialog
