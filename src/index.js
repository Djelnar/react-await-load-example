import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-await-ssr/src/context'

const mountNode = document.querySelector('#root')

mountNode.style.display = 'none'

ReactDOM.render((
  <Provider onLoad={() => {
    mountNode.style.display = 'block'
  }}>
    <App />
  </Provider>
), mountNode)
