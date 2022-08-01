import { ImagesGrid } from '../components/ImagesGrid'
import { useGetVotesQuery } from '../data/cat-api/cat.api'
import { Cat } from '../models/models'

export const LikesPage = () => {
  const { data: VotedCats, isLoading, isError } = useGetVotesQuery()

  const likesData = VotedCats?.filter((cat) => cat.value === 1)

  let data: Cat[] = []
  if (likesData) {
    data = likesData.map((cat) => ({
      id: cat.image.id,
      url: cat.image.url,
    }))
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Some Error</div>
  return (
    <>
      <div>LikesPage</div>
      <ImagesGrid data={data} />
    </>
  )
}

type PropsType = {
  id: string
  value: number
}
