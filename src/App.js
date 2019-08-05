import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PublicShow from './views/Public/PublicShow'
import ProtectedShow from './views/Protected/ProtectedShow'
import LoginShow from './views/Login/LoginShow'

function App() {
  return (
    <Router>
      <div>
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
        <Route path="/protected" component={ProtectedShow} />
        <Route path="/login" component={LoginShow} />
      </div>
    </Router>
  )
}

export default App
