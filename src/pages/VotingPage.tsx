import { ImagesGrid } from '../components/ImagesGrid'
import { useGetCatsQuery, useMakeVoteMutation } from '../data/cat-api/cat.api'

export const VotingPage = () => {
  const { isLoading, isError, data } = useGetCatsQuery({ limit: '1' })
  const [makeVote] = useMakeVoteMutation()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Some Error</div>
  return (
    <>
      <div>VotingPage</div>
      {data && <ImagesGrid data={data} />}
      {data && <button onClick={() => makeVote({ image_id: data[0].id, value: 1 })}>Like</button>}
      {data && (
        <button onClick={() => makeVote({ image_id: data[0].id, value: 0 })}>Dislike</button>
      )}
    </>
  )
}
