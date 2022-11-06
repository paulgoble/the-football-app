import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseURL = 'http://localhost:8080/'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL
  }),
  endpoints: (builder) => ({
    getFixtures: builder.query({
      query: () => '/fixtures'
    }),
    getResults: builder.query({
      query: () => '/results'
    }),
    getStandings: builder.query({
      query: () => '/standings'
    })
  })
})

export const {
  useGetFixturesQuery,
  useGetResultsQuery,
  useGetStandingsQuery
} = apiSlice