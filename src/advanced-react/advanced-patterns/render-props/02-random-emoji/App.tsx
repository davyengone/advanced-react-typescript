import React, {Component, ComponentType} from 'react'
import {Emojis} from '../../../shared/Emojis'
import {Container} from '../../../shared/Container'
import {Title} from '../../../shared/Title'

const emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍']

// TODO:
// Call the render function with a random emoji from the array above 🤓
// render props
const RandomEmoji = ({render}: {render: (emoji: string) => ComponentType<any>}): ComponentType<any> => {
  const randomEl = Math.floor(Math.random()*emojis.length);
  return render(emojis[randomEl])
}


export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <Title>Here, have a free, random emoji</Title>
        {/** Pass a function to the render prop that renders an emoji inside the <Emojis /> component **/}
        <RandomEmoji render={emoji => <Emojis>{emoji}</Emojis> } />
      </Container>
    )
  }
}
