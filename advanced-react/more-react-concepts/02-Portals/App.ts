import React from 'react'
import unicorn from '../../assets/unicorn.jpg'
import {Container} from '../../shared/Container'
import {AbsoluteButton} from '../02-portals-solution/shared/AbsoluteButton'
import {ModalDiv} from '../02-portals-solution/shared/ModalDiv'

// Try to make sure the modal will be above the button on the page.
// Small tip: http://lmgtfy.com/?q=react+portals
// Also look at the file public/index.html

const ModalComponent = ({children, toggle}) => (
  <ModalDiv>
    <div className="modal-background" onClick={toggle} />
    <div className="modal-content">{children}</div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={toggle}
    />
  </ModalDiv>
)

export class App extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(({isOpen}) => ({isOpen: !isOpen}))
  }

  render() {
    return (
      <Container>
        {this.state.isOpen && (
          <ModalComponent toggle={this.toggle}>
            <img src={unicorn} alt="a unicorn" />
          </ModalComponent>
        )}

        <AbsoluteButton onClick={this.toggle}>Click me</AbsoluteButton>
      </Container>
    )
  }
}
