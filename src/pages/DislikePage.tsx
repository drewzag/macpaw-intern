import { ImagesGrid } from '../components/ImagesGrid'
import { useGetVotesQuery } from '../data/cat-api/cat.api'
import { Cat } from '../models/models'

export const DislikesPage = () => {
  const { data: VotedCats, isLoading, isError } = useGetVotesQuery()

  const dislikesData = VotedCats?.filter((cat) => cat.value === 0)

  let data: Cat[] = []
  if (dislikesData) {
    data = dislikesData.map((cat) => ({
      id: cat.image.id,
      url: cat.image.url,
    }))
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Some Error</div>
  return (
    <>
      <div>DisikesPage</div>
      <ImagesGrid data={data} />
    </>
  )
}
