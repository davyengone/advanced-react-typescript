import React, {createContext} from 'react'

const NameContext = createContext()

const Family = () => (
  <div>
    <Person />
  </div>
)

const Person = () => (
  <NameContext.Consumer>
    {({name, changeName}) => (
      <div>
        <h2>{name}</h2>
        <button onClick={changeName}>Change</button>
      </div>
    )}
  </NameContext.Consumer>
)

export class App extends React.Component {
  state = {
    name: 'Javascript',
  }

  changeName = () => {
    this.setState({name: 'React'})
  }

  render() {
    return (
      <NameContext.Provider
        value={{name: this.state.name, changeName: this.changeName}}
      >
        <div>
          <Family />
        </div>
      </NameContext.Provider>
    )
  }
}
