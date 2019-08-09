import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { toggleSignInForm } from '../../actions/AuthActions.js'
import SignInDialog from './components/SignInDialog.js'

class SignInShow extends React.Component {
  render() {
    return (
      <div>
        <SignInDialog open={this.props.showSignInForm} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showSignInForm: state.auth.showSignInForm,
})

const mapDispatchToProps = dispatch => ({
  toggleSignInForm: () => {
    console.log('1')
    return dispatch(toggleSignInForm())
  },
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInShow)
