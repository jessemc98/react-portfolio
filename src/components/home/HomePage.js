import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router'

const HomePage = (props) => {
  return (
    <main className="HomePage route">
      <header className="HomePage-welcome" role="banner">
        <h1>JESSE MCINTOSH</h1>
        <h2>Front-end Developer</h2>
        <Link to="/about" className="jmc_button">ABOUT</Link>
      </header>
    </main>
  )
}

export default HomePage
