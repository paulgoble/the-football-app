import React from 'react'
import { Fixtures } from './routes/Fixtures'
import { Results } from './routes/Results'
import { Standings } from './routes/Standings'
import { Image, Button, Modal } from 'react-bootstrap'
import { TeamInfo, TeamContext } from './components/Teams'

const App = () => {
  const [activeTab, setActiveTab] = React.useState('fixtures')
  const [teamId, setTeamId] = React.useState(null)
  const [showTeamInfo, setShowTeamInfo] = React.useState(false)
  
  const imageURL = './world-cup-2022-logo.svg'

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id < 26000) {
      setTeamId(e.target.id)
      setShowTeamInfo(true)
    }
    return false
  }

  const Page = ({ tab }) => {
    switch (tab) {
      case 'fixtures':
        return <Fixtures />
      case 'results':
        return <Results />
      case 'standings':
        return <Standings />
      default:  return null
    }
  }

  const ButtonGroup = () => (
    <div className='button-group'>
          <Button className='button' onClick={
            () => setActiveTab('fixtures')}>Fixtures
          </Button>
          <Button className='button' onClick={
            () => setActiveTab('results')}>Results
          </Button>
          <Button className='button' onClick={
            () => setActiveTab('standings')}>Standings
          </Button>
      </div>
  )

  return (
    <div className='container'>
      <div className='header'>
        <Image src={imageURL} fluid />
      </div>
      <div className='body'>
        <ButtonGroup />
        <Modal centered
          show={showTeamInfo} 
          onHide={() => setShowTeamInfo(false)}
        >
          <TeamInfo teamId={teamId}/>
        </Modal>
        <TeamContext.Provider value={handleClick}>
          <Page tab={activeTab} />
        </TeamContext.Provider>
        
        <p>This app was built using <a href='https://reactjs.org/'>React</a> and <a href='https://nodejs.org'>Node.js</a><br />
        and data provided by <a href='https://www.sportmonks.com'>www.sportmonks.com</a><br />
        </p><br />
      </div>
    </div>
  )
}

export default App