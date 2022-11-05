import React from 'react'
import PropTypes from 'prop-types'
import { TeamContext } from './Teams'

export const Match = ({teams, matchData}) => {
  const handleClick = React.useContext(TeamContext)

  return (
    <tr className='match'>
      <td className='team'>
        <img src={teams.local.logo_path} style={{width: '1.25rem', height: '1.25rem', margin: '8px'}} />
        <a href='#' id={teams.local.id} onClick={handleClick}>{teams.local.name}</a>
      </td>
      <td>
        <h5>{matchData.primary}</h5>
        <p>{matchData.secondary}</p>
      </td>
      <td className='team'>
      <img src={teams.visitor.logo_path} style={{width: '1.25rem', height: '1.25rem', margin: '8px'}} />
      <a href='#' id={teams.visitor.id} onClick={handleClick}>{teams.visitor.name}</a>
      </td>
    </tr>
  )
}

Match.propTypes = {
  teams: PropTypes.shape({
    local: PropTypes.object.isRequired,
    visitor: PropTypes.object.isRequired
  }),
  matchData: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}