import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './sass/styles.scss'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'mobx-react'
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from './routes'

import authStore from './store/auth.store'
import commonStore from './store/common.store'

const stores = {
  authStore,
  commonStore
}

ReactDOM.render((
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
