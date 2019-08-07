import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { postSignOut } from '../../actions/AuthActions.js'

class AuthButton extends React.Component {
  render() {
    return this.props.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            postSignOut()
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = dispatch => ({
  postSignOut: () => dispatch(postSignOut()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AuthButton)
