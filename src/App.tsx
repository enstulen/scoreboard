import React from 'react'
import './App.css'
import { compose } from 'redux'
import { firestoreConnect, populate } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { convertToArrayOfObjects } from './shared/Utils'
import ChallengeList from './components/challenge/ChallengeList'
import { ReduxState } from './shared/Types'
import Stats from './pages/stats/Stats'
import Stats2 from './pages/stats/Stats2'
const App = ({ challenges, users }) => {
  return (
    <div>
      <h1>Siste spill</h1>
      <ChallengeList
        challenges={convertToArrayOfObjects(challenges)}
      ></ChallengeList>
      <Stats users={users} />
      <Stats2 users={users} />
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
  })),
  firestoreConnect(() => ['users']),
  connect((state: ReduxState) => ({
    users: state.firestore.ordered.users
  }))
)(App)
