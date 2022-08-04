import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Breed, BreedsRequest, Cat, CatRequest, SearchBreeds } from '../../models/models'

const SUB_ID = 'drew1111'

export const catApi = createApi({
  reducerPath: 'cat/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', 'ead5678f-7f39-4919-8607-355edec25e50')
      return headers
    },
  }),
  tagTypes: ['Vote'],
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
    getSingleCatById: build.query<Cat[], string>({
      query: (image_id) => ({
        url: 'images',
        params: {
          image_id,
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
    getVotes: build.query<GetVotesType[], void>({
      query: () => ({
        url: 'votes',
        params: {
          sub_id: SUB_ID,
        },
      }),
      providesTags: ['Vote'],
    }),
    makeVote: build.mutation<MakeVoteResponseType, MakeVoteRequestType>({
      query: (vote) => ({
        url: 'votes',
        method: 'POST',
        body: { sub_id: SUB_ID, ...vote },
      }),
    }),
    getFavourites: build.query<GetVotesType[], void>({
      query: () => ({
        url: 'favourites',
        params: {
          sub_id: SUB_ID,
        },
      }),
      providesTags: ['Vote'],
    }),
    makeFavourite: build.mutation<MakeVoteResponseType, MakeFavRequestType>({
      query: (fav) => ({
        url: 'favourites',
        method: 'POST',
        body: { sub_id: SUB_ID, ...fav },
      }),
    }),
    deleteVote: build.mutation<string, DeleteVoteType>({
      query: ({ url = 'votes', vote_id }) => ({
        url: `${url}/${vote_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vote'],
    }),
    uploadImage: build.mutation<[], FormData>({
      query: (image) => ({
        url: 'images/upload',
        method: 'POST',
        body: image,
      }),
    }),
  }),
})

export const {
  useGetCatsQuery,
  useGetSingleCatByIdQuery,
  useGetAllBreedsQuery,
  useGetSearchBreedQuery,
  useGetVotesQuery,
  useMakeVoteMutation,
  useGetFavouritesQuery,
  useMakeFavouriteMutation,
  useDeleteVoteMutation,
  useUploadImageMutation,
} = catApi

export type GetVotesType = {
  id: string
  value: number
  image: {
    url: string
    id: string
  }
}

type MakeVoteResponseType = {
  id: string
  message: string
}

type MakeVoteRequestType = {
  image_id: string
  value: number
}

type MakeFavRequestType = {
  image_id: string
}

type DeleteVoteType = {
  url?: string
  vote_id: string
}
