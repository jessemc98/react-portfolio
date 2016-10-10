import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router'

const HomePage = (props) => {
  return (
    <div id="HomePage">
      <div className="HomePage-welcome">
        <h1>JESSE MCINTOSH</h1>
        <h2>Front-end Developer</h2>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  )
}

export default HomePage
