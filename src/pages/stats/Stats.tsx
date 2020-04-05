import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { UserObject } from '../../shared/Types'
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

  const COLORS = ['#E01050', '#1090E0', '#10E060']

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
        >
          {userData &&
            userData.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>

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
