import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import icon from '../../assets/icons/logo.png'
interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className='navbar'>
      <img src={icon} alt='' />
      <NavLink to='/register' activeClassName='active'>
        Registrer
      </NavLink>
      <NavLink to='/leaderboard' activeClassName='active'>
        Leaderboard
      </NavLink>
      <NavLink to='/stats' activeClassName='active'>
        Stats
      </NavLink>
      <NavLink to='/spill' activeClassName='active'>
        Siste spill
      </NavLink>
      <NavLink exact={true} to='/login' activeClassName='active'>
        Login
      </NavLink>
      <NavLink exact={true} activeClassName='active' to='/'>
        Hjem
      </NavLink>
    </div>
  )
}

export default Navbar
