/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { plats } from '../reducers/plats'
import { Overlay, Content, Title, XOut, Detail } from '../lib/ModalStyles'
import { Button } from '../lib/Button'
import { Input, Location } from '../lib/Input'
import { ReverseRow, RowWrapper, ColWrapper } from '../lib/Wrapper'

export const Modal = ({ display, setDisplay, offset, building }) => {
  const id = building.id
  const [name, setName] = useState(building.name)
  const [long, setLong] = useState(building.long)
  const [lat, setLat] = useState(building.lat)
  const [startDate, setStartDate] = useState(building.startDate)
  const dispatch = useDispatch()

  const onNameChanged = (e) => setName(e.target.value)
  const onLongChanged = (e) => setLong(e.target.value)
  const onLatChanged = (e) => setLat(e.target.value)
  const onDateChange = (e) => setStartDate(e.target.value)
  const message = () => {
    return 'hi!'
  }

  const handleEdits = () => {
    var t = ''

    if (name || lat || long || startDate) {
      dispatch(plats.actions.editBuilding(building, {name:{name}, long:{long}, lat:{lat} }))

      console.log('an edit has been submitted!')
      setDisplay(false)
    }
  }

  const cancelChange = () => {
    setDisplay(false)
  }

  useEffect(() => {
    if (display) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [display])

  return (
    <>
      {display && (
        <Overlay width={window.innerWidth} top={offset}>
          <Content>
          <ReverseRow>
            <XOut onClick={cancelChange}>&times;</XOut>
          </ReverseRow>
          <ColWrapper background="#85adad">
            <Title>What should we change?</Title>
              <Input 
                type="text" 
                value={name} 
                onChange={onNameChanged} 
                placeholder={building.building.name}
              />
              <Location 
                type="number" 
                value={long} 
                onChange={onLongChanged} 
                placeholder={building.building.long} 
              />
              <Location 
                type="number" 
                value={lat} 
                onChange={onLatChanged} 
                placeholder={building.building.lat}
              />
              <Detail>Online Since: {building.building.startDate}</Detail>
              <Input 
                type="datetime-local" 
                value={startDate} 
                onChange={onDateChange} 
                placeholder={building.building.startDate}
              />
            </ColWrapper>
            <RowWrapper>
              <Button 
                type="button"
                value={building.building.id}
                // onclick={message}
                onClick={() => handleEdits()} 
                background="#d1ccc7"
                // disabled="true"
              >
                Save to building {building.building.id}
              </Button>
            </RowWrapper>
          </Content>
        </Overlay>
      )}
    </>
  )
}