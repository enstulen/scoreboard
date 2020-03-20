import React from 'react'
import { Link } from 'react-router-dom'
interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
