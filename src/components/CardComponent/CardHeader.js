import React, { PropTypes } from 'react'
import Fab from '../common/fab/Fab'
import closeIcon from '../../assets/icons/delete.svg'

const CardHeader = ({ title, onClick, colors={} }) => (
  <div className="Card_header" >
    <div className="Card_header_main"
      style={{background: colors.main}} >
      <h1 className="Card_header_title">{title}</h1>
      <Fab
        className="Card_toggleButton"
        icon={closeIcon}
        alt="toggle modal"/>
    </div>
    <div className="Card_header_highlight" />
  </div>
)
CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colors: PropTypes.shape({
    main: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired
  }).isRequired
}
export default CardHeader
