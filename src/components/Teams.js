import React from 'react'
import { baseURL } from '../api/apiSlice'

export const TeamInfo = ({teamId}) => {
  const [team, setTeam] = React.useState(null)

  React.useEffect(() => {
    fetch(baseURL.concat('teams/', teamId))
    .then(response => response.json())
    .then(data => setTeam(data))
  },[])

  if (!team) {
    return null
  }

  return (
    <div className='team-info'>
      <h1>{team.name}</h1>
      <img src={team.logo_path}></img>
      {/* <h4>FIFA Ranking: {team.fifaranking.data.position}</h4> */}
      <h4>Coach: {team.coach.data.fullname}</h4>
    </div>
  )
}

export const TeamContext = React.createContext()