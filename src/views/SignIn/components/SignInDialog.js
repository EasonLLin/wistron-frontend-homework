import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'
import { bindActionCreators, compose } from 'redux'
import styled from 'styled-components'
import { signIn, cancelSignIn } from '../../../actions/AuthActions.js'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const FormGroup = styled.div`
  margin-bottom: 18px;
`
const Input = styled.input`
  display: inline-block;
  width: 80%;
  padding: 5px 12px;
  font-size: 13px;
  color: #222222;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 3px;
`
const Error = styled.div`
  display: block;
  color: #db3d44;
  font-size: 12px;
  position: absolute;
`

const useStyles = makeStyles({
  button: {
    backgroundColor: 'grey',
    color: '#f2f2f2',
  },
  progress: {
    width: '24px',
    height: '24px',
  },
  closeButton: {
    position: 'absolute',
    right: '7px',
    top: '7px',
  },
})

const SignInDialog = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
    if (props.status === 'request') {
      props.cancelSignIn()
    }
  }

  async function handleSignIn(values) {
    props.signIn({
      username: values.username,
      password: values.password,
      history: props.history,
    })
  }

  const required = value => (value ? undefined : 'This is a required field')

  return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
        Sign In
      </Button>

      <Dialog open={open} aria-labelledby="dialog-title" onClose={handleClose}>
        <DialogTitle id="dialog-title">
          Sign In
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Form
          onSubmit={handleSignIn}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <Field name="username" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Enter Username"
                        />
                        <Error>
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </Error>
                      </FormGroup>
                    </div>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Enter Password"
                        />
                        <Error>
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </Error>
                      </FormGroup>
                    </div>
                  )}
                </Field>
                <Error>{props.status === 'failure' ? props.errText : ''}</Error>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary" disabled={submitting}>
                  {props.status === 'request' ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </DialogActions>
            </form>
          )}
        />
      </Dialog>
    </div>
  )
}

const mapStateToProps = state => ({
  status: state.auth.status,
  errText: state.auth.errText,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signIn,
      cancelSignIn,
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
