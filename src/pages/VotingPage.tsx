import styled from 'styled-components'
import { ImagesGrid } from '../components/ImagesGrid'
import {
  useGetCatsQuery,
  useMakeFavouriteMutation,
  useMakeVoteMutation,
} from '../data/cat-api/cat.api'
import { ReactComponent as Like } from '../assets/like.svg'
import { ReactComponent as Dislike } from '../assets/dislike-30.svg'
import { ReactComponent as Favourites } from '../assets/fav-30.svg'

const SmallButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: none;
`

export const VotingPage = () => {
  const { data, isLoading, isError } = useGetCatsQuery({ limit: '1' })
  const [makeVote] = useMakeVoteMutation()
  const [makeFav] = useMakeFavouriteMutation()

  return (
    <>
      <div>VotingPage</div>
      <SmallButton>
        <Like fill='red' />
      </SmallButton>
      <SmallButton>
        <Dislike />
      </SmallButton>
      <SmallButton>
        <Favourites />
      </SmallButton>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data && <ImagesGrid data={data} />}
          {data && (
            <button onClick={() => makeVote({ image_id: data[0].id, value: 1 })}>Like</button>
          )}
          {data && <button onClick={() => makeFav({ image_id: data[0].id })}>Favourites</button>}
          {data && (
            <button onClick={() => makeVote({ image_id: data[0].id, value: 0 })}>Dislike</button>
          )}
        </div>
      )}
    </>
  )
}
