import React from 'react'
import { bool } from 'prop-types'
import styled from 'styled-components/macro'

const Menu = styled.nav`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  background: #139938;
  opacity: 0.9;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 8;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
  a {
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  
  a.active {
    color: #000;
  }  
`

export const BurgerMenu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return(
    <Menu
     open={open}
     aria-hidden={!isHidden}
     {...props}>
     <a href="/about" tabIndex={tabIndex}>
      <span aria-hidden="true" />
      About 
    </a>
    <a href="/stories" tabIndex={tabIndex}>
      <span aria-hidden="true" />
      Success Stories 
    </a>
    <a href="/career" tabIndex={tabIndex}>
      <span aria-hidden="true" />
      Careers
    </a>
    <a href="/contact" tabIndex={tabIndex}>
      <span aria-hidden="true" />
      Contact 
    </a>
    </Menu>
  )
}

BurgerMenu.propTypes = {
  open: bool.isRequired,
}