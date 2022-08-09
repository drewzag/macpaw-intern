export interface CatRequest {
  id?: string
  limit?: string
  page?: string
  breed_id?: string
  mime_types?: string
  order?: string
}

export interface Cat {
  id: string
  url: string
}

export interface VotedCat {
  id: string
  image_id?: string
  url: string
}

export interface BreedsRequest {
  limit?: string
  page?: string
  order?: string
}

export interface Breed {
  id: string
  name: string
  image: Cat
}

export interface SearchBreeds {
  id: string
  name: string
  reference_image_id: string
}

export enum BasePathname {
  VOTING = '/voting',
  BREEDS = '/breeds',
  GALLERY = '/gallery',
}
