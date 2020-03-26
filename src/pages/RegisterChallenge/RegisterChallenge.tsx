import React, { useState } from 'react'
import { useFirestore, firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ReduxState, TagObject, UserObject } from '../../shared/Types'

interface RegisterChallengeProps {
  tags: Array<TagObject>
  users: Array<UserObject>
}

const RegisterChallenge = ({ tags, users }: RegisterChallengeProps) => {
  const firestore = useFirestore()
  const [name, setName] = useState('')
  const [date, setDate] = useState()
  const [comment, setComment] = useState('')

  //Bruk denne funksjonen for å legge til challenge
  const createChallenge = (
    name: string,
    date: Date,
    comment: string,
    tags: Array<TagObject>,
    user: UserObject
  ) => {
    firestore.collection('challenges').add({ name, date, comment, tags, user })
  }

  console.log(tags)
  console.log(users)

  return <div></div>
}

export default compose(
  firestoreConnect(() => ['tags', 'users']),
  connect((state: ReduxState) => ({
    tags: state.firestore.ordered.tags,
    users: state.firestore.ordered.users
  }))
)(RegisterChallenge)
