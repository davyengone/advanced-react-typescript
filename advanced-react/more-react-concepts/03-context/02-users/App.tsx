import React, {Component, Fragment, createContext, useContext} from 'react'
import {Banner} from '../02-users-solution/styled/Banner'
import {Avatar} from '../02-users-solution/styled/Avatar'
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

const ProfileSidebar = ({currentUser}) => (
  <div>
    <Avatar src={currentUser.picture} />
  </div>
)

const AppBanner = ({currentUser, changeUser}) => (
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
)

const UserSelection = ({changeUser}) => (
  <div>
    {USERS.map(user => (
      <Avatar key={user.name} src={user.picture} onClick={changeUser(user)} />
    ))}
  </div>
)

const UserPage = ({currentUser}) =>
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

export class App extends Component {
  state = {
    currentUser: null,
  }

  changeUser = user => () => this.setState({currentUser: user})

  render() {
    const {currentUser} = this.state
    // TODO do something with currentUser?
    return (
      <Fragment>
        <AppBanner />
        <UserPage />
      </Fragment>
    )
  }
}
