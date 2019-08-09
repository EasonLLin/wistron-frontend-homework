import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)
const store = createStore(reducer, compose(middlewares))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
