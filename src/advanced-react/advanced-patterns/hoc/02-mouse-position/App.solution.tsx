import React, {Component} from 'react'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

// TODO:
// create a withMousePos HOC that gives you the position of the mouse
export const withMouseHOC = WrappedComponent =>
  class extends Component {
    state = {
      x: 0,
      y: 0,
    }

    handleMouse = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
    }

    render() {
      return (
        <div onMouseMove={this.handleMouse}>
          <WrappedComponent x={this.state.x} y={this.state.y} />
        </div>
      )
    }
  }

export class _App extends Component {
  render() {
    const {x, y} = this.props
    return (
      <Container>
        <Title>
          The mouse position is ({x}, {y}) using the withMouseHoc
        </Title>
      </Container>
    )
  }
}

export const App = withMouseHOC(_App);
