import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts'
import { UserObject } from '../../shared/Types'
import { useStore } from 'react-redux'
import './Stats.css'

interface StatsProps {
  users: Array<UserObject>
}

const Stats = ({ users }: StatsProps) => {
  const userData =
    users &&
    users.map(user => {
      return { name: user.name, value: user.winCount }
    })
  const userData2 =
    users &&
    users.map(user => {
      return { name: user.name, value: user.winCount }
    })

  console.log('hei', userData)

  return (
    <div className='statsContainer'>
      <p id='diagram'>Diagram </p>
      <PieChart width={600} height={600}>
        <Pie
          dataKey='value'
          isAnimationActive={false}
          data={userData}
          cx={200}
          cy={200}
          outerRadius={200}
          fill='#8884d8'
          label
        />

        <Pie
          dataKey='value'
          data={userData2}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill='#82ca9d'
        />
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default Stats
