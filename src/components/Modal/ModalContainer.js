import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import './ModalContainer.scss'

class ModalContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  componentWillUpdate() {
    this._render()
  }
  componentWillUnmount() {
    this.hideModal()
  }
  _render() {
    ReactDOM.render(
      <Modal title="modal" content="hello testing 123" hide={this.hideModal}/>,
      this.modalTarget
    )
  }
  showModal() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = "ModalContainer"
    document.body.appendChild(this.modalTarget)
    this._render()
  }
  hideModal() {
    document.body.removeChild(this.modalTarget)
    ReactDOM.unmountComponentAtNode(this.modalTarget)
  }
  render () {
    return (
      <button onClick={this.showModal}>
        Open Modal
      </button>
    )
  }
}

export default ModalContainer;
