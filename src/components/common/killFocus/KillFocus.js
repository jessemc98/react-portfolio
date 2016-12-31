import React, { PropTypes } from 'react'
import getFocusable from './getFocusable'

class KillFocus extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)

    this.focusable = null

    this.getFocusable = this.getFocusable.bind(this)
    this.setTabIndex = this.setTabIndex.bind(this)
  }
  componentDidMount() {
    this.setTabIndex(this.props.enabled)
  }
  componentWillReceiveProps(newProps) {
    this.setTabIndex(newProps.enabled)
  }
  getFocusable(elem) {
    const search = elem.node || elem
    this.focusable = Array.prototype.slice.apply(getFocusable(search))
  }
  setTabIndex(enabled) {
    const tabIndex = enabled ? '-1' : '0'

    this.focusable.forEach(elem => {
      elem.tabIndex = tabIndex
    })
  }
  render() {
    return React.cloneElement(this.props.children, {
      ref: this.getFocusable
    })
  }
}
KillFocus.propTypes = {
  enabled: PropTypes.bool,
  children: PropTypes.element
}
export default KillFocus;
