import React from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { UserObject } from '../../shared/Types'

interface StatsProps {
  users: Array<UserObject>
}
const Stats2 = ({ users }: StatsProps) => {
  const userData =
    users &&
    users.map(user => {
      return { name: user.name, antSeiere: user.winCount }
    })

  console.log('hello', userData)
  const COLORS = ['#E01050', '#1090E0', '#10E060']

  return (
    <BarChart
      width={500}
      height={300}
      data={userData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis
        dataKey='antSeiere'
        label={{ value: 'Antall seiere', angle: -90, position: 'insideLeft' }}
      />
      />
      <Tooltip />
      <Legend />
      <Bar dataKey='antSeiere' fill='white'>
        {userData &&
          userData.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
      </Bar>
    </BarChart>
  )
}

export default Stats2
