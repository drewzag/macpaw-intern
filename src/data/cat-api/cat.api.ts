import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Breed, BreedsRequest, Cat, CatRequest, SearchBreeds } from '../../models/models'

export const catApi = createApi({
  reducerPath: 'cat/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    headers: {
      'x-api-key': 'ead5678f-7f39-4919-8607-355edec25e50',
    },
  }),
  endpoints: (build) => ({
    getCats: build.query<Cat[], CatRequest>({
      query: ({ id, limit, breed_id, page, mime_types, order }) => ({
        url: 'images/search',
        params: {
          id,
          limit,
          breed_id,
          page,
          mime_types,
          order,
        },
      }),
    }),
    getAllBreeds: build.query<Breed[], BreedsRequest>({
      query: ({ limit, page, order }) => ({
        url: 'breeds',
        params: {
          limit,
          page,
          order,
        },
      }),
    }),
    getSearchBreed: build.query<SearchBreeds[], string>({
      query: (q: string) => ({
        url: 'breeds/search',
        params: {
          q,
        },
      }),
    }),
  }),
})

export const { useGetCatsQuery, useGetAllBreedsQuery, useGetSearchBreedQuery } = catApi
