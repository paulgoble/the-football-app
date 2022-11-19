import React from 'react'
import { useGetFixturesQuery } from '../api/apiSlice'
import { Match } from '../components/Match'
import { Error } from '../components/Error'
import { Table, Spinner } from 'react-bootstrap'

const MatchDayTable = ({date, fixtures}) => (
  <div className='match-day'>
    <h6>
      {new Date(
        date.slice(5).concat('-', date.slice(0,4))
        .replace(/-/g, "/")).toDateString()
      }
    </h6>
    <Table size='sm'>
      <tbody>
        {fixtures.map(match => {
          const teams = {
            local: match.localTeam.data,
            visitor: match.visitorTeam.data,
          }
          const matchData = match.time.status === 'NS' ?
          {
            primary: new Date(match.time.starting_at.timestamp * 1000)
              .toLocaleTimeString([], {
                hour: 'numeric', 
                minute: '2-digit'
              }),
            secondary: null
          } :
          {
            primary: `${match.scores.localteam_score} - ${match.scores.visitorteam_score}`,
            secondary: match.time.minute
          }

          return (<Match 
            key={match.id} 
            teams={teams}
            matchData={matchData}
          />)
        })}
      </tbody>
    </Table>
  </div>
)

export const Fixtures = () => {
  const {
    data: fixtures,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetFixturesQuery()

  let content;
  if (isLoading) {
    content = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (isError) {
    content = <Error message={error.status}/>
  } else if (!fixtures) {
    content = <Error message='DATA_ERROR: undefined' />
  } else if (isSuccess) {
    content = fixtures.map(m => <MatchDayTable key={m.date} date={m.date} fixtures={m.matches}/>)
  }

  return (
    <div id="fixtures">
      {content}
    </div>
  )
}