import React from 'react'

import jobs from '../data/jobs.json'
import { Job } from './Job'
import { Container } from '../lib/Container'

export const Career = () => {
  // This code has been left here intentionally as a code-review discussion point.
  // const [jobs, setJobs] = useState([])
  // useEffect(() => {
  //   const listAPI = 'https://shrouded-sands-40183.herokuapp.com/https://storage.googleapis.com/ext-code-test/data.json/'
  //
  //   fetch(listAPI)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setJobs(json.job)
  //       console.log(json)
  //     })
  // }, [])
  return (
    <div>
      <h2>Current opportunities in <span>Stockholm</span></h2>
      <Container>
        {jobs.map((job) => (
          <Job id={job.id} {...job}/>
        ))}
      </Container>
    </div>
  )
}