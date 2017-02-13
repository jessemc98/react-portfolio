import React, { PropTypes } from 'react'
import CardHeader from './CardHeader'
import './CardManager.scss'

class CardManager extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      isOpen: false
    }

    this.toggleCardState = this.toggleCardState.bind(this)
  }
  toggleCardState () {
    this.setState({isOpen: !this.state.isOpen})
  }
  render () {
    const { isOpen } = this.state
    const { title, colors } = this.props
    return (
      <div className={`Card ${isOpen ? "Card-open":""}`}>
        <CardHeader
          title={title}
          onClick={this.toggleCardState}
          colors={colors}/>
      </div>
    )
  }
}
CardManager.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    // valid css color values
    main: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired
  }).isRequired,
  image: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.array.isRequired // array of FabLink objects
}
export default CardManager;
