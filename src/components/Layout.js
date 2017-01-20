//handles layout/template used on every page
import React, { PropTypes, PureComponent} from 'react'
import TopNav from './common/topnav/TopNav'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends PureComponent {
  render() {
    let { children } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="route"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        className="container-fluid">
        <TopNav key="TopNav"/>
        {React.cloneElement(children, {
          key: children.type.name
        })}
      </ReactCSSTransitionGroup>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
