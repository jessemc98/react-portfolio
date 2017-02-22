import React, { PropTypes } from 'react'
import FabLink from '../common/fab/FabLink'

// import SyntaxHighlighter and register javascript syntax highlighting
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco';
registerLanguage('javascript', js);

class CardContent extends React.Component {
  render () {
    const {
      code,
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
        <section className="Card_content_inner">
          {image &&
            <img
              className="Card_content_image"
              src={image.src} srcSet={image.srcSet} alt={imageAlt} />}

          {code &&
            <SyntaxHighlighter className="Card_content_code"
              language="javascript" style={docco}>
              {code}
            </SyntaxHighlighter>}

          <div className="Card_content_appliedSkills">
            <h2>Skills Applied</h2>
            <ul className="Card_content_appliedSkills_list">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
        <footer className="Card_content_footer" role="contentinfo">
          <h3 className="Card_content_footer_title">Project Links</h3>
          {links.map((link, i) => (
            <FabLink {...link} key={link.text}/>
          ))}
        </footer>
      </div>
    )
  }
}
CardContent.propTypes = {
  background: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  links: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired
}
export default CardContent;
