import React from 'react'
import { ChallengeObject } from '../../shared/Types'
import moment from 'moment'
import './Challenge.css'
import morten from '../../assets/icons/morten.png'

interface ChallengeProps {
  challenge: ChallengeObject
}

const Challenge = ({ challenge }: ChallengeProps) => {
  return (
    <div key={challenge.id} className='challenge'>
      <img src={morten} alt='' className='bilde' />
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
        <p className='sport'>Sport</p>
        <p className='kodd'> Kødd</p>
      </div>
    </div>
  )
}

export default Challenge
