import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <HashRouter basemname={`/`}> */}
      {/* <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}> */}
      {/* </HashRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
