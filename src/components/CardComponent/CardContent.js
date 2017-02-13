import React, { PropTypes } from 'react'
import FabLink from '../common/fab/FabLink'

class CardContent extends React.Component {
  render () {
    const {
      description,
      image,
      imageAlt,
      skills,
      links,
      background
    } = this.props
    return (
      <div className="Card_content"
        style={{background}}>
        <p className="Card_content_description">
          {description}
        </p>
        <div className="Card_content_inner">
          {image &&
            <img className="Card_content_image"
              src={image} alt={imageAlt} />}
          <div className="Card_content_appliedSkills">
            <h3>Skills Applied</h3>
            <ul className="Card_content_appliedSkills_list">
              {skills.map(skill => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Card_content_footer">
          <h3 className="Card_content_footer_title">Project Links</h3>
          {links.map(link => (
            <FabLink {...link} />
          ))}
        </div>
      </div>
    )
  }
}
CardContent.propTypes = {
  background: PropTypes.string.isRequired,
  showContent: PropTypes.bool.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  links: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired
}
export default CardContent;
