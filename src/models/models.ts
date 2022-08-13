export enum BasePathname {
  VOTING = '/voting',
  BREEDS = '/breeds',
  GALLERY = '/gallery',
  LIKES = '/likes',
  DISLIKES = '/dislikes',
  FAVOURITES = '/favourites',
}

// Requests Interfaces

export interface ICatSearchRequest {
  id?: string
  limit?: string
  page?: string
  breed_id?: string
  mime_types?: string
  order?: string
}

export interface IBreedsRequest {
  limit?: string
  page?: string
  order?: string
}

export type MakeVoteResponseType = {
  id: string
  message: string
}

export type MakeFavRequestType = {
  image_id: string
}

export type MakeVoteRequestType = {
  image_id: string
  value: number
}

export type DeleteVoteRequestType = {
  url?: string
  vote_id: string
}

// Response Interfaces

export interface ISearchCat {
  id: string
  width: number
  height: number
  url: string
}

export interface ISingleCatImage {
  id: string
  url: string
  breeds: IBreedSearchInfo[]
  width: number
  height: number
}

export interface IBreedInfo {
  image: ISearchCat
  weight: IWeight
  id: string
  name: string
  cfa_url: string
  vetstreet_url: string
  vcahospitals_url: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
}

export interface IBreedSearchInfo {
  weight: IWeight
  id: string
  name: string
  cfa_url: string
  vetstreet_url: string
  vcahospitals_url: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
}

export interface ICatVoting {
  id: number
  image_id: string
  sub_id: string
  created_at: Date
  value: number
  country_code: string
  image: IImage
}

export interface ICatFavourites {
  id: number
  image_id: string
  sub_id: string
  created_at: Date
  image: IImage
}

interface IWeight {
  imperial: string
  metric: string
}

interface IImage {
  id: string
  url: string
}

export interface IAnalysis {
  labels: string
  moderation_labels: string
  vendor: string
  approved: number
  rejected: number
}
