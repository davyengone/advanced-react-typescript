import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import unicorn from '../../assets/unicorn.jpg'
import {Container} from '../../shared/Container'
import {AbsoluteButton} from './shared/AbsoluteButton'
import {ModalDiv} from './shared/ModalDiv'

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

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <ModalComponent {...this.props} />,
      document.getElementById('modal-root')
    )
  }
}

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
          <Modal toggle={this.toggle}>
            <img src={unicorn} alt="a unicorn" />
          </Modal>
        )}

        <AbsoluteButton onClick={this.toggle}>Click me</AbsoluteButton>
      </Container>
    )
  }
}
