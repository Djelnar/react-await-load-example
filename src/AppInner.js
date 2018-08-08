import React, { Component } from 'react'
import { hoc } from 'react-await-ssr/src/context'
import { delay } from './delay'


class AppInner extends Component {
  state = {
    val: 228
  }

  componentDidMount = () => {
    const { insertPromise } = this.props

    const promise = delay(3000)
      .then(val => this.setState({
        val
      }))
    insertPromise(promise)
  }


  render() {
    return (
      <div className="App">
        {this.state.val}
      </div>
    )
  }
}

export default hoc(AppInner)
