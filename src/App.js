import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import PublicShow from './views/Public/PublicShow'
import ProtectedShow from './views/Protected/ProtectedShow'
import SignInShow from './views/SignIn/SignInShow'
import AuthButton from './views/Auth/AuthButton'

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  },
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ padding: '20px' }}>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <hr />

          <Route exact path="/" />
          <Route path="/public" component={PublicShow} />
          <Route
            path="/protected"
            render={() => {
              console.log('auth', auth)
              return auth.isAuthenticated ? (
                <ProtectedShow />
              ) : (
                <Redirect to="/signin" />
              )
            }}
          />
          <Route path="/signin" component={SignInShow} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.auth.userName,
  password: state.auth.password,
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = dispatch => ({})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App)
