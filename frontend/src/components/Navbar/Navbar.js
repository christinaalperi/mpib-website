import React from 'react'
import { Nav, NavLink, NavMenu } 
    from "./styles";


function Navbar() {
  return (
    <div>
    <Nav>
        <NavMenu>
          <NavLink to="/" activestyle>
            Home
          </NavLink> 
          <NavLink to="/committees" activestyle>
            Committees
          </NavLink>
          <NavLink to="/questions" activestyle>
            Questions
          </NavLink>
          <NavLink to="/photos" activestyle>
            Photos
          </NavLink>
          <NavLink to="/contacts" activestyle>
            Contact
          </NavLink>
          <NavLink to="/admin" activestyle>
            Admin
          </NavLink>
        </NavMenu>
      </Nav>
      </div>
  )
}

export default Navbar