import React from 'react'
import "./Nav.scss"
import DateTime from './DateTime'
const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./Navbar-icons/apple.svg" alt="" />
            </div>
            <div className="nav-items">
                <p>Sachchidanand Gupta</p>
            </div>
             <div className="nav-items">
                <p>File</p>
            </div>
             <div className="nav-items">
                <p>Window</p>
            </div>
             <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="./Navbar-icons/wifi.svg" alt="" />
            </div>
              <div className="nav-items">
                <DateTime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav