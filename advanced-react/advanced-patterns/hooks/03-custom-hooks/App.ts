import React, {Component} from 'react'
import {Background} from '../../../shared/Background'
import {Text} from '../../../shared/Text'

class OnlineStatusProvider extends Component {
  state = {
    onLine: navigator.onLine,
  }

  componentDidMount() {
    window.addEventListener('online', this.online)
    window.addEventListener('offline', this.offline)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.online)
    window.removeEventListener('offline', this.offline)
  }

  online = () =>
    this.setState({
      onLine: true,
    })

  offline = () =>
    this.setState({
      onLine: false,
    })

  render() {
    const {render} = this.props
    const {onLine} = this.state
    return render(onLine)
  }
}

export class App extends Component {
  render() {
    // TODO 2:
    // Use the render prop <OnlineStatusProvider /> to get network status
    return (
      <OnlineStatusProvider
        render={onLine => (
          <Background darkTheme={!onLine}>
            <Text darkTheme={!onLine}>
              {onLine ? "You're online!" : "You're offline!"}
            </Text>
          </Background>
        )}
      />
    )
  }
}
