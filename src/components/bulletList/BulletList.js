import React, { PropTypes } from 'react'
import './BulletList.scss'

const BulletList = ({ title, items=[] }) => {
  return (
    <div className="BulletList">
      <h3 className="BulletList_title">{title}:</h3>
      <ul className="BulletList_list">
        {
          items.map((item, i) => {
            return <li key={i}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
BulletList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
}

export default BulletList
