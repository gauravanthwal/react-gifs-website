import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              Gipphy<span className="red-text darken-4">Search</span>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
