import React from 'react'
import { ChallengeObject } from '../../shared/Types'
import Challenge from './Challenge'

interface ChallengeListProps {
  challenges: Array<ChallengeObject>
}

const ChallengeList = ({ challenges }: ChallengeListProps) => {
  return (
    <div className='challenge-container'>
      {challenges &&
        challenges.map(challenge => {
          return (
            <Challenge challenge={challenge} key={challenge.id}></Challenge>
          )
        })}
    </div>
  )
}

export default ChallengeList
