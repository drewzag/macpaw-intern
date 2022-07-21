import { useGetSearchBreedQuery } from '../data/cat-api/cat.api'

export const BreedsSearchPage = () => {
  const { data, isLoading } = useGetSearchBreedQuery('si')

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <div>BreedsSearchPage</div>
      {data?.map((breed) => (
        <div key={breed.id}>
          <div>Breed: {breed.name}</div>
        </div>
      ))}
    </>
  )
}
