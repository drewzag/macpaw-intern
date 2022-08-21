import { ImagesGrid } from '../components/ImagesGrid'
import { SearchField } from '../components/SearchField'
import {
  useGetCatsQuery,
  useMakeFavouriteMutation,
  useMakeVoteMutation,
} from '../data/cat-api/cat.api'

export const VotingPage = () => {
  const { data, isLoading, isError } = useGetCatsQuery({ limit: '1' })
  const [makeVote] = useMakeVoteMutation()
  const [makeFav] = useMakeFavouriteMutation()

  return (
    <>
      <SearchField />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <>
            <ImagesGrid data={data} />
            <button onClick={() => makeVote({ image_id: data[0].id, value: 1 })}>Like</button>
            <button onClick={() => makeFav({ image_id: data[0].id })}>Favourites</button>
            <button onClick={() => makeVote({ image_id: data[0].id, value: 0 })}>Dislike</button>
          </>
        )
      )}
    </>
  )
}
