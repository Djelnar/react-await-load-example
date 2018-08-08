import React from 'react'

const Context = React.createContext()

export const Provider = class extends React.Component {
  promises = []

  firstRender = true

  insertPromise = (promise) => {
    this.promises.push(promise)
    console.log(this.promises)
  }

  render = () => {
    if (this.firstRender) {
      this.firstRender = false
      setTimeout(() => {
        Promise.all(this.promises)
          .then(this.props.onLoad)
      }, 0)
    }

    return (
      <Context.Provider
        value={{
          insertPromise: this.insertPromise,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const { Consumer } = Context

export const hoc = (WrappedComponent) => (props) => (
  <Context.Consumer>
    {({ insertPromise }) => (
      <WrappedComponent insertPromise={insertPromise} {...props} />
    )}
  </Context.Consumer>
)
