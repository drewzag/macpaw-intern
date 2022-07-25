import { useState } from 'react'
import { ImagesGrid } from '../components/ImagesGrid'
import { useGetAllBreedsQuery, useGetCatsQuery } from '../data/cat-api/cat.api'
import { Cat } from '../models/models'

export const BreedsPage = () => {
  const [limit, setLimit] = useState('15')
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

  let data: Cat[] = []

  if (showAllBreeds && breedIds === '') {
    data = showAllBreeds.map((breed) => ({
      id: breed.id,
      url: breed.image.url,
    }))
  } else if (showFiltredBreeds && breedIds !== '') {
    data = showFiltredBreeds
  }

  console.log(data)

  const onBreedChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreedIds(e.target.value)
  }

  const onOrderChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value)
  }

  return (
    <div>
      <div>BreedsPage</div>
      <select name='order' onChange={onOrderChangeHandler}>
        <option value={'asc'}>asc</option>
        <option value={'desc'}>desc</option>
      </select>
      <select name='select_breeds' onChange={onBreedChangeHandler}>
        <option value={''}>None</option>
        {allBreeds?.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

      {isBreedsLoading || isCatsLoading ? <div>Loading...</div> : <ImagesGrid data={data} />}
    </div>
  )
}
