import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Link, Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/app/App'
import Counter from './components/counter/Counter'

import store from './store/configureStore'

const history = syncHistoryWithStore(hashHistory, store)

const Wrapper = ({children}) => (
  <div>
    <h2>Wilkommen</h2>
    <Link to="/todo" activeClassName={'active'}>Todo</Link>
    <Link to="/counter" activeClassName={'active'}>Counter</Link>
    {children}
  </div>
)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <Route path="todo" component={App} />
        <Route path="counter" component={Counter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
