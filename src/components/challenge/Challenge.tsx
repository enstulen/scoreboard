//@ts-nocheck
import React from 'react'
import { ChallengeObject } from '../../shared/Types'
import moment from 'moment'
import './Challenge.css'

interface ChallengeProps {
  challenge: ChallengeObject
}

const Challenge = ({ challenge }: ChallengeProps) => {
  return (
    <div key={challenge.id} className='challenge'>
      <div className='text-container'>
        <p>
          {challenge.name + ' '}
          <span className='date'>
            {moment(challenge.date.seconds * 1000).format('l')}
          </span>
        </p>
        <p>{challenge.comment}</p>
      </div>
      <div className='tag-container'>
        <p>Sport</p>
        <p>Sport</p>
        <p>Sport</p>
      </div>
    </div>
  )
}

export default Challenge
