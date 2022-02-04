import React, { useState, useRef } from 'react'
import { Link, NavLink  } from 'react-router-dom/cjs/react-router-dom'
import FocusLock from 'react-focus-lock'

import logo from '../assets/logo.png'
import { Hamburger } from './Hamburger'
import { BurgerClick } from './BurgerClick' 
import { BurgerMenu } from './BurgerMenu' 

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuID = 'burger-menu'

  BurgerClick(node, () => setOpen(false))

  return (
    <nav>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Hamburger 
            open={open}
            setOpen={setOpen}
            aria-controls={menuID} />
          <BurgerMenu 
            open={open}
            setOpen={setOpen}
            id={menuID} />
        </FocusLock>
      </div>

      <h1>
        <Link to="/">
          <img src={logo} height="62px" alt="VNTRS logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/stories">
            Success Stories
          </NavLink>
        </li>
        <li>
          <NavLink to="/career">
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
          Let's talk!
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}