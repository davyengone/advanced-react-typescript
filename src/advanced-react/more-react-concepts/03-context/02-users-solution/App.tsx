import React, {Component, Fragment, createContext} from 'react'
import {Banner} from './styled/Banner'
import {Avatar} from './styled/Avatar'
import {Button} from '../../../shared/Button'

const USERS = [
  {
    name: 'Mark',
    picture: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    name: 'Jen',
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    name: 'Selma',
    picture: 'https://randomuser.me/api/portraits/women/36.jpg',
  },
]

const UserContext = createContext({
  currentUser: USERS[0],
})

const provideContext = WrappedComponent => props => (
  <UserContext.Consumer>
    {({...context}) => <WrappedComponent {...props} {...context} />}
  </UserContext.Consumer>
)

const ProfileSidebar = provideContext(({currentUser}) => (
  <div>
    <Avatar src={currentUser.picture} />
  </div>
))

const AppBanner = provideContext(({currentUser, changeUser}) => (
  <Banner>
    {currentUser ? (
      <Fragment>
        <div>Hello {currentUser.name}!</div>
        <Button onClick={changeUser(null)}>Log Out</Button>
      </Fragment>
    ) : (
      <div>Please sign in!</div>
    )}
  </Banner>
))

const UserSelection = provideContext(({changeUser}) => (
  <div>
    {USERS.map(user => (
      <Avatar key={user.name} src={user.picture} onClick={changeUser(user)} />
    ))}
  </div>
))

const UserPage = provideContext(
  ({currentUser}) =>
    currentUser ? (
      <Fragment>
        <h1>Successfully logged in!</h1>
        <ProfileSidebar user={currentUser} />
      </Fragment>
    ) : (
      <Fragment>
        <div>Who is using this app?</div>
        <UserSelection />
      </Fragment>
    )
)

export class App extends Component {
  state = {
    currentUser: null,
  }

  changeUser = user => () => this.setState({currentUser: user})

  render() {
    const {currentUser} = this.state
    return (
      <UserContext.Provider value={{currentUser, changeUser: this.changeUser}}>
        <AppBanner />
        <UserPage />
      </UserContext.Provider>
    )
  }
}
