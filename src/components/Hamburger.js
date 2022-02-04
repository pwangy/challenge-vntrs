import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components/macro'

const Burger = styled.div`
  height: 10px;
  width: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 24px;
  z-index: 10;
  cursor: pointer;
  @media (min-width: 900px) {
  display: none;
  }

  div {
    margin-left: 16px;
    height: 2px;
    width: 25px;
    background: #000;
    border-radius: 3px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.25s linear;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg) translateY(-9px) translateX(3px)' : 'rotate(0)'};
    }
    :nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translateY(9px) translateX(3px)' : 'rotate(0)'};
    }
  }
`

export const Hamburger = ({ open, setOpen, ...props }) => {
  const isOpen = open ? true : false

  return (
    <Burger
      aria-label="toggle menu" 
      aria-expanded={isOpen} 
      open={open}
      onClick={() => setOpen(!open)}
      {...props}>
      <div></div>
      <div></div>
    </Burger>
  )
}

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}