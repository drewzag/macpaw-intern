import { ImagesGrid } from '../components/ImagesGrid'
import { useGetCatsQuery, useMakeVoteMutation } from '../data/cat-api/cat.api'

export const VotingPage = () => {
  const { isLoading, isError, data } = useGetCatsQuery({ limit: '1' })
  const [makeVote] = useMakeVoteMutation()

  return (
    <>
      <div>VotingPage</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data && <ImagesGrid data={data} />}
          {data && (
            <button onClick={() => makeVote({ image_id: data[0].id, value: 1 })}>Like</button>
          )}
          {data && (
            <button onClick={() => makeVote({ image_id: data[0].id, value: 0 })}>Dislike</button>
          )}
        </div>
      )}
    </>
  )
}
