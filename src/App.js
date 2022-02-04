import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { About } from './components/About'
import { Career } from './components/Career'
import { CareerDetail } from './components/CareerDetail'
import { Contact } from './components/Contact'
import { Stories } from './components/Stories'
import { Nav } from './components/Nav'
import { Wrapper } from './lib/Wrapper' 

export const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Career />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/stories'>
            <Stories />
          </Route>
          <Route exact path='/career' >
            <Career />
          </Route>
          <Route exact path='/career/:slug'>
            <CareerDetail />
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}