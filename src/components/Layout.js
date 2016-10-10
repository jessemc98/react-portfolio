//handles layout/template used on every page
import React, { PropTypes, Component} from 'react'
import TopNav from './../common/topnav/TopNav'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Layout extends Component {
  render() {
    let { children } = this.props
    return (
      <div className="container-fluid">
        <TopNav />
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
