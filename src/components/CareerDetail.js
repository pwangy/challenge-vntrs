import React from 'react'
import { useParams } from 'react-router-dom'

import jobs from '../data/jobs.json'
import { Container } from '../lib/Container'
import { Img } from '../lib/Img'

export const CareerDetail = () => {
  const params = useParams()
  const match = jobs.find((job) => job.slug === params.slug)
  return (
    <Container>
      <Img src={`${match.image}`} alt={`image for ${match.title}`} />
      <h2>{match.title}</h2>
      <p>{match.description}</p>
    </Container>
  )
}