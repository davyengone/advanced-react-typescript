import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'
import {Button} from '../../../shared/Button'

export class App extends Component {
  state = {
    count: 0,
  }

  setCount = () => this.setState({count: this.state.count + 1})
  render() {
    const {count} = this.state
    return (
      <Container>
        <Title>The number is {count}</Title>
        <Button onClick={() => this.setCount(count + 1)}>+</Button>
      </Container>
    )
  }
}
