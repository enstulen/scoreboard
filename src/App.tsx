//@ts-nocheck
import React from 'react'
import './App.css'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import moment from 'moment'

const App = ({ challenges }) => {
  console.log(challenges)
  return (
    <div>
      {challenges &&
        challenges.map(challenge => {
          return (
            <div key={challenge.id}>
              <p>{challenge.name}</p>
              <p>{moment(challenge.date.seconds * 1000).format('l')}</p>
              <p>{challenge.comment}</p>
            </div>
          )
        })}
    </div>
  )
}
export default compose(
  firestoreConnect(() => ['challenges']),
  connect(state => ({
    challenges: state.firestore.ordered.challenges
  }))
)(App)
