import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Modal from './Modal'
import modals from '../../store/modals'

class ModalContainer extends React.PureComponent {
  constructor(...args){
    super(...args)
    this.hideModal = this.hideModal.bind(this)
  }
  hideModal(){
    browserHistory.push('/about')
  }
  render() {
    const { modalId } = this.props.params
      return (
        <Modal {...modals[modalId]}
          key="modal"
          hide={this.hideModal} />
      )
  }
}
ModalContainer.propTypes = {
  history: PropTypes.object.isRequired,
  params: PropTypes.shape({
    modalId: PropTypes.string.isRequired
  }).isRequired
}
export default ModalContainer;
