import { useState } from 'react'
import { ImagesGrid } from '../components/ImagesGrid'
import { SearchField } from '../components/SearchField'
import { useGetAllBreedsQuery, useGetCatsQuery } from '../data/cat-api/cat.api'
import { IBreedInfo, IImagesGrid, ISearchCat } from '../models/models'

export const BreedsPage = () => {
  const [limit, setLimit] = useState('5')
  const [breedIds, setBreedIds] = useState('')
  const [page, setPage] = useState('0')
  const [order, setOrder] = useState('asc')

  const { data: allBreeds } = useGetAllBreedsQuery({ limit: '' })
  const { isLoading: isBreedsLoading, data: showAllBreeds } = useGetAllBreedsQuery(
    {
      limit: limit,
      page: page,
      order: order,
    },
    { skip: breedIds !== '' }
  )
  const { isLoading: isCatsLoading, data: showFiltredBreeds } = useGetCatsQuery(
    { limit: limit, page: page, order: order, breed_id: breedIds },
    { skip: breedIds === '' }
  )

  let data: IImagesGrid[] = []

  if (showAllBreeds && breedIds === '') {
    data = showAllBreeds.map((breed: IBreedInfo) => ({
      image_id: breed.id,
      url: breed.image.url,
      width: breed.image.width,
      height: breed.image.height,
    }))
  } else if (showFiltredBreeds && breedIds !== '') {
    data = showFiltredBreeds.map((breed: ISearchCat) => ({
      image_id: breed.id,
      url: breed.url,
      width: breed.width,
      height: breed.height,
    }))
  }

  const onBreedChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreedIds('')
    setBreedIds(e.target.value)
  }

  const onOrderChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value)
  }
  const onLimitChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(e.target.value)
  }

  return (
    <>
      <div>
        <SearchField />
        <select name='order' onChange={onOrderChangeHandler}>
          <option value={'asc'}>asc</option>
          <option value={'desc'}>desc</option>
        </select>
        <select name='limit' onChange={onLimitChangeHandler}>
          <option value={'5'}>5</option>
          <option value={'10'}>10</option>
          <option value={'15'}>15</option>
          <option value={'20'}>20</option>
          <option value={'25'}>25</option>
        </select>
        <select name='select_breeds' onChange={onBreedChangeHandler}>
          <option value={''}>None</option>
          {allBreeds?.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </div>
      {showAllBreeds && breedIds === '' && <ImagesGrid data={data} />}
      {showFiltredBreeds && breedIds !== '' && <ImagesGrid data={data} />}
    </>
  )
}
