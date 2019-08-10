import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postSignIn } from '../../../actions/AuthActions.js'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  button: {
    backgroundColor: 'grey',
    color: '#f2f2f2',
  },
})

const SignInDialog = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleSetUsername(event) {
    setUsername(event.target.value)
  }

  function handleSetPassword(event) {
    setPassword(event.target.value)
  }

  async function handlePostSignIn() {
    props.postSignIn({
      username: username,
      password: password,
      history: props.history,
    })
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
              value={username}
              onChange={handleSetUsername}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handleSetPassword}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handlePostSignIn} color="primary">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      postSignIn,
      // add other watcher sagas to this object to map them to props
    },
    dispatch
  )
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInDialog)
