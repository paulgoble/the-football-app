/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { TeamStanding } from '../components/TeamStanding'
import { Match } from '../components/Match'

describe('reusable components', () => {
  test('renders match content', () => {
    const teams = {
      local: 'Tottenham',
      visitor: 'Chelsea'
    }

    const matchData = {
      primary: '5-3 FT',
      secondary: null
    }

    const tbody = document.createElement('tbody')

    render(
      <Match teams={teams} matchData={matchData} />,
      {container: document.body.appendChild(tbody)}
    )

    const element = screen.getByText('Tottenham')
    expect(element).toBeDefined()
  })
  
  test('renders standing content', () => {
    const team = {
      "position": 1,
      "team_id": 53,
      "team_name": "Celtic",
      "overall": {
          "games_played": 7,
          "won": 6,
          "draw": 0,
          "lost": 1,
          "goals_scored": 25,
          "goals_against": 3,
          "points": 18
      },
      "points": 18,
      "recent_form": "WWWWL",
    }

    const tbody = document.createElement('tbody')

    render(
      <TeamStanding team={team} />,
      {container: document.body.appendChild(tbody)}
    )

    const element = screen.getByText('Celtic')
    expect(element).toBeDefined()
  })
})