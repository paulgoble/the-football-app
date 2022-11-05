import React from 'react'
import PropTypes from 'prop-types'
import { TeamContext } from './Teams'

export const TeamStanding = ({team}) => {
  const handleClick = React.useContext(TeamContext)
  
  return (
    <tr className="standing">
      <td>{team.position}</td>
      <td><a href='#' id={team.team_id} onClick={handleClick}>{team.team_name}</a></td>
      <td>{team.overall.games_played}</td>
      <td>{team.overall.won}</td>
      <td>{team.overall.draw}</td>
      <td>{team.overall.lost}</td>
      <td>{team.overall.goals_scored - team.overall.goals_against}</td>
      <td>{team.points}</td>
    </tr>
  )
}

TeamStanding.propTypes = {
  team: PropTypes.object.isRequired
}