import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router'

const HomePage = (props) => {
  return (
    <div className="HomePage route">
      <div className="HomePage-welcome">
        <h1>JESSE MCINTOSH</h1>
        <h2>Front-end Developer</h2>
        <Link to="/about" className="jmc_button">ABOUT</Link>
      </div>
    </div>
  )
}

export default HomePage
