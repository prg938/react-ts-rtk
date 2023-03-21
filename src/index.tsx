
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import {Provider} from 'react-redux'
import Cake from './components/Cake'
import Users from './components/Users'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store={store}>
      <Cake />
      <Users />
    </Provider>
  )