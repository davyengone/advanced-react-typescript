import React, {Component, ComponentType} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {Emojis} from '../../../shared/Emojis'


const HOC = (WrappedComponent: ComponentType) => {

    return class extends Component {
      state = {
        ready: false,
      }

      componentDidMount() {
        setTimeout(() => {
          this.setState({
            ready: true,
          })
        }, 2000)
      }

      render(){
        const {ready} = this.state;
        return ready? <WrappedComponent/>: <h1>Loading....</h1>
      }
    }
}

export class _App extends Component {
  render() {
    return  (
      <Container>
        <Title>
          Your first Higher order! <Emojis>🎉</Emojis>
        </Title>
      </Container>
    ) 
  }
}

export const App = HOC(_App);
