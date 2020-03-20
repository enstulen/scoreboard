import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import icon from '../../assets/icons/logo.png'
interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar">
      <img src={icon} alt="" />
      <a href="">Registrer</a>
      <a href="">Leaderboard</a>
      <a href="">Stats</a>
      <a href="">Siste spill</a>
      <a id="hjem" href="">
        Hjem
      </a>
    </div>
  )
}

export default Navbar
