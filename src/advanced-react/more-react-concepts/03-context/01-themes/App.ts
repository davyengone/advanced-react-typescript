import React, {createContext, Fragment} from 'react'
import {Background} from '../01-themes-solution/styled/Background'
import {Box} from '../01-themes-solution/styled/Box'
import {Text} from '../01-themes-solution/styled/Text'

const THEMES = {
  light: {
    mainBackgroundColor: '#FFF',
    backgroundColor: '#FAFAFA',
    text: '#444',
  },
  dark: {
    mainBackgroundColor: '#333',
    backgroundColor: '#444',
    text: '#FAFAFA',
  },
  epileptic: {
    mainBackgroundColor: '#0FF',
    backgroundColor: '#FF0',
    text: '#F0F',
  },
}

const ThemedBackground = Background
const ThemedBox = Box
const ThemedText = Text

const ChangeThemeButton = props => (
  <button className="button" type="button" onClick={null}>
    Change theme
  </button>
)

const Lines = () => (
  <Fragment>
    <ThemedText>This is the first line</ThemedText>
    <ThemedText>This is the second line</ThemedText>
  </Fragment>
)

const Content = () => (
  <ThemedBox>
    <ChangeThemeButton />
    <Lines />
  </ThemedBox>
)

const Main = () => (
  <ThemedBackground>
    <Content />
  </ThemedBackground>
)

export class App extends React.Component {
  state = {
    selectedTheme: 'light',
  }

  nextTheme = () => {
    const names = Object.keys(THEMES)
    const selectedIndex = names.indexOf(this.state.selectedTheme)
    this.setState({
      selectedTheme: names[(selectedIndex + 1) % names.length],
    })
  }

  render() {
    return <Main />
  }
}
