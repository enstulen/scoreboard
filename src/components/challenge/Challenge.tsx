import React from 'react'
import { ChallengeObject } from '../../shared/Types'
import moment from 'moment'

interface ChallengeProps {
  challenge: ChallengeObject
}

const Challenge = ({ challenge }: ChallengeProps) => {
  return (
    <div key={challenge.id} className='challenge'>
      <p>{challenge.name}</p>
      <p>{moment(challenge.date.seconds * 1000).format('l')}</p>
      <p>{challenge.comment}</p>
    </div>
  )
}

export default Challenge
