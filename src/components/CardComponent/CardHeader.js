import React, { PropTypes } from 'react'
import Fab from '../common/fab/Fab'
import closeIcon from '../../assets/icons/delete.svg'

const CardHeader = ({ title, onClick, colors={} }) => (
  <div className="Card_header" style={{background: colors.main}}>
    <header className="Card_header_main"
      role="banner">
      <h1 className="Card_header_title">
        <span className="Card_header_title-inner">
          {title}
        </span>
      </h1>
      <div className="Card_toggleButton">
        <Fab
          tabIndex="0"
          icon={closeIcon}
          onClick={onClick}
          alt={`toggle ${title} project modal`}/>
      </div>
    </header>
    <div className="Card_header_highlight"
      style={{background: colors.highlight}}/>
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
