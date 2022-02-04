import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '../lib/Card'
import { TextOverlay } from '../lib/TextOverlay'
import { Overlay } from '../lib/TextOverlay'

export const Job = ({ id, title, image, slug }) => {
  return (
    <Link key={id} to={`/career/${slug}`}>  
      <Card background={image} id={id} slug={slug} >
          <Overlay>
            <TextOverlay>{title}</TextOverlay>
          </Overlay>
        </Card>
    </Link>
  )
}