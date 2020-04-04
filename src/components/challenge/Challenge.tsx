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
      <img src={challenge.user.image} alt='' className='bilde' />
      <div className='tekst'>
        <div className='navn'>
          <p>
            {challenge.name}{' '}
            <span className='dato'>
              {moment(challenge.date.seconds * 1000).format('l')}
            </span>
          </p>
        </div>
        <p>{challenge.comment}</p>
      </div>
      <div className='tags'>
        {challenge.tags.map(tag => (
          <p key={tag.name} style={{ backgroundColor: tag.color }}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Challenge
