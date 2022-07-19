import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catApi = createApi({
  reducerPath: 'cat/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    headers: {
      'x-api-key': 'ead5678f-7f39-4919-8607-355edec25e50',
    },
  }),
  endpoints: (build) => ({
    getRandomCat: build.query({
      query: () => 'images/search',
    }),
  }),
})
