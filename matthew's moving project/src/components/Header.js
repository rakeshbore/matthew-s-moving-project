import React from 'react'
import {NavLink} from "react-router-dom"
const Header = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      {/* <div className='contact_phone_number'>
           <h1 className='phone_number'>9848452290</h1>
         </div> */}
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
         
          <NavLink exact to="/" className="nav-logo">
          <img src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/logo.png"/>
          </NavLink>
         
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/testimonial"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                TESTIMONIAL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                PHOTO GALLERY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/faq"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Header