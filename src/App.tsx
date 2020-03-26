import React from 'react'
import './App.css'
import { compose } from 'redux'
import { firestoreConnect, populate } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { convertToArrayOfObjects } from './shared/Utils'
import ChallengeList from './components/challenge/ChallengeList'
import { ReduxState } from './shared/Types'

const App = ({ challenges }) => {
  return (
    <div>
      <h1>Siste spill</h1>
      <ChallengeList
        challenges={convertToArrayOfObjects(challenges)}
      ></ChallengeList>
    </div>
  )
}

const populates = [{ child: 'tags', root: 'tags' }]
const collection = 'challenges'
export default compose(
  firestoreConnect(props => [
    {
      collection,
      populates
    }
  ]),
  connect((state: ReduxState, props) => ({
    challenges: populate(state.firestore, collection, populates)
  }))
)(App)
