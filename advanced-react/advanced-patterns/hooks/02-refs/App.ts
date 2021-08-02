import React from 'react'
import {Container} from '../../../shared/Container'
import {Button} from '../../../shared/Button'
import {Input} from '../../../shared/Input'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()
    this.state = {
      field: '',
    }
  }

  setField = ({target: {value}}) => this.setState({field: value})

  onClick = () => this.inputElement.current.focus()

  render() {
    return (
      <Container>
        <Button onClick={this.onClick}>Click to put focus on input</Button>
        <Input
          innerRef={this.inputElement}
          type="text"
          value={this.state.field}
          onChange={({target: {value}}) => this.setField(value)}
        />
        <pre>{this.state.field}</pre>
      </Container>
    )
  }
}
