import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-container navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="heading nav-head navbar-brand fw-bold" to="/">
            AI Interview Coach
          </Link>

          <div>
            <Link to="/login" className="login-btn btns btn me-2">
              Login
            </Link>

            <Link to="/register" className="btns btn btn-outline-light">
              Register
            </Link>
          </div>
        </div>
      </nav>
  )
}
export default Navbar