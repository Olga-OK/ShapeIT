import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../api'


const logoutUser = (props) =>{
  logout()
  .then(() => {
    props.updateUser(null);  // sets the global user object to 'null'
  })
}

const navbar = (props) => {

  if (props.userInSession) {
    return (
      <nav className="nav-style">
        <ul>
          <li>Welcome, {props.userInSession.email}</li>
          <li>
            <Link to='/calendar' style={{ textDecoration: 'none' }}>Calendar</Link>
          </li>
          <li>
            <Link to='/'>
              <button onClick={() => logoutUser(props)}>Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <div>
        <nav className="nav-style">
          <ul>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default navbar;