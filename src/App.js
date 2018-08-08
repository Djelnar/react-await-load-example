import React, { Component } from 'react'
import { hoc } from 'react-await-ssr/src/context'
import { delay } from './delay'
import AppInner from './AppInner'


class App extends Component {
  state = {
    val: 0
  }

  componentDidMount = () => {
    const { insertPromise } = this.props

    const promise = delay(2000)
      .then(val => this.setState({
        val
      }))
    insertPromise(promise)
  }


  render() {
    return (
      <div className="App">
        {this.state.val}
        <AppInner />
      </div>
    )
  }
}

export default hoc(App)
