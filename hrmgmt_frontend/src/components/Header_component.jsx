import './Header_com.css'

import { Link } from 'react-router-dom'

function Header_component(){
  return(
    <div>
      <div className="header">
      <Link to="/">Home</Link>
      <Link to="/About">About us</Link>
      <Link to="/Contact">Contact us</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      </div>
    </div>
  )
}
export default Header_component