import React, { useState } from 'react'
import { useFirestore, firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ReduxState, TagObject, UserObject } from '../../shared/Types'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import './RegistrerChallenge.css'

import 'react-datepicker/dist/react-datepicker.css'

interface RegisterChallengeProps {
  tags: Array<TagObject>
  users: Array<UserObject>
}

const RegisterChallenge = ({ tags, users }: RegisterChallengeProps) => {
  const firestore = useFirestore()
  const [name, setName] = useState('')
  const [date, setDate] = useState(new Date())
  const [comment, setComment] = useState('')
  const [selectedtTags, setSelectedTags] = useState([])
  const [user, setUser] = useState({ name: 'ingen navn oppgitt', image: '' })

  const options =
    tags &&
    tags.map(tag => {
      console.log(tag)
      return {
        value: tag.id,
        label: tag.name
      }
    })
  console.log(options)

  const userOptions =
    users &&
    users.map(user => {
      return {
        value: user,
        label: user.name
      }
    })

  const buttonClick = () => {
    console.log(selectedtTags)
    const tagsIds = selectedtTags.map(tag => {
      return tag.value
    })
    createChallenge(name, date, comment, tagsIds, user)
  }

  //Bruk denne funksjonen for å legge til challenge
  const createChallenge = (
    name: string,
    date: Date,
    comment: string,
    tags: Array<string>,
    user: UserObject
  ) => {
    firestore.collection('challenges').add({ name, date, comment, tags, user })
  }

  console.log(tags)
  console.log(user)

  return (
    <div>
      <h1>Register challenge</h1>
      <div className='Regcontainer'>
        <div className='sammeCon'>
          <div className='submissonName'>
            <p>Navn</p>
            <input
              type='text'
              id='challegeName'
              onChange={name => setName(name.target.value)}
            />
          </div>
          <span className='dato'>
            <p>Dato</p>
            <DatePicker
              claseName='date'
              selected={date}
              onChange={date => setDate(date)}
            />
          </span>
        </div>
        <div>
          <p>Kommentar</p>
          <input
            className='string'
            type='comment'
            onChange={comment => setComment(comment.target.value)}
          />
        </div>
        <div>
          <p>Tags</p>
          <Select
            className='string'
            isMulti={true}
            onChange={selectedTag => setSelectedTags(selectedTag)}
            options={options}
          />
        </div>
        <div>
          <p>Vinner</p>
          <Select
            className='string'
            onChange={user => setUser(user.value)}
            options={userOptions}
          />
        </div>
        <button onClick={() => buttonClick()}>Send inn</button>
      </div>
      <div className='hvitboks'></div>
    </div>
  )
}

export default compose(
  firestoreConnect(() => ['tags', 'users']),
  connect((state: ReduxState) => ({
    tags: state.firestore.ordered.tags,
    users: state.firestore.ordered.users
  }))
)(RegisterChallenge)
