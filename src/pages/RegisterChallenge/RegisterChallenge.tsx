import React, { useState } from 'react'
import { useFirestore, firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ReduxState, TagObject } from '../../shared/Types'

interface RegisterChallengeProps {
  tags: Array<TagObject>
}

const RegisterChallenge = ({ tags }: RegisterChallengeProps) => {
  const firestore = useFirestore()
  const [name, setName] = useState('')
  const [date, setDate] = useState()
  const [comment, setComment] = useState('')

  //Bruk denne funksjonen for å legge til challenge
  const createChallenge = (
    name: string,
    date: Date,
    comment: string,
    tags: Array<TagObject>
  ) => {
    firestore.collection('challenges').add({ name, date, comment, tags })
  }

  console.log(tags)
  return <div></div>
}

export default compose(
  firestoreConnect(() => ['tags']),
  connect((state: ReduxState) => ({
    tags: state.firestore.ordered.tags
  }))
)(RegisterChallenge)
