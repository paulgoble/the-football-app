import React from 'react'
import { useGetResultsQuery } from '../api/apiSlice'
import { Match } from '../components/Match'
import { Error } from '../components/Error'
import { Table, Spinner } from 'react-bootstrap'

const ResultsTable = ({date, results}) => (
  <div className='match-day'>
    <h6>{new Date(date.slice(5).concat('-', date.slice(0,4))).toDateString()}</h6>
    <Table size='sm'>
      <tbody>
        {results.map(match => {
          const teams = {
            local: match.localTeam.data,
            visitor: match.visitorTeam.data
          }
          const matchData = {
            primary: match.scores.ft_score.concat(' FT'),
            secondary: match.scores.ht_score.concat(' HT')
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

export const Results = () => {
  const {
    data: results,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetResultsQuery()

  let content;
  if (isLoading) {
    content = (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (isError) {
    content = <Error message={error.status}/>
  } else if (!results) {
    content = <Error message='DATA_ERROR: undefined' />
  } else if (isSuccess) {
    content = (results.length !== 0) ? 
      results.map(m => <ResultsTable key={m.date} date={m.date} results={m.matches}/>) : <h5>No results to display</h5>
  }
  
  return (
    <div id="results">
      {content}
    </div>
  )
}