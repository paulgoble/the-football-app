import React from 'react'
import { useGetStandingsQuery } from '../api/apiSlice'
import { TeamStanding } from '../components/TeamStanding'
import { Error } from '../components/Error'
import { Table, Spinner } from 'react-bootstrap'

const GroupTable = ({group}) => (
  <div className='group'>
    <h6>{group.name}</h6>
    <Table size='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th className='team-standing'>Team</th>
          <th>Played</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {group.standings.data
          .map(team => <TeamStanding 
            key={team.team_id} 
            team={team}
          />)
        }
      </tbody>
    </Table>
  </div>
)

export const Standings = () => {
  const {
    data: standings,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetStandingsQuery()

  let content;
  if (isLoading) {
    content = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (isError) {
    content = <Error message={error.status}/>
  } else if (!standings) {
    content = <Error message='DATA_ERROR: undefined' />
  } else if (isSuccess) {
    content = standings.map((group) => {
      return <GroupTable key={group.name} group={group} />
    })
  }

  return (
    <div id="standings">
      {content}
    </div>
  )
}