import React, {createContext, Fragment} from 'react'
import {Background} from './styled/Background'
import {Box} from './styled/Box'
import {Text} from './styled/Text'

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

const ThemeContext = createContext(THEMES.light)

const withTheme = WrappedComponent => props => (
  <ThemeContext.Consumer>
    {({theme}) => <WrappedComponent {...props} {...theme} />}
  </ThemeContext.Consumer>
)

const ThemedBackground = withTheme(Background)
const ThemedBox = withTheme(Box)
const ThemedText = withTheme(Text)

const ChangeThemeButton = props => (
  <ThemeContext.Consumer>
    {({nextTheme}) => (
      <button className="button" type="button" onClick={nextTheme}>
        Change theme
      </button>
    )}
  </ThemeContext.Consumer>
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
    const context = {
      theme: THEMES[this.state.selectedTheme],
      nextTheme: this.nextTheme,
    }

    return (
      <ThemeContext.Provider value={context}>
        <Main />
      </ThemeContext.Provider>
    )
  }
}
