import { ImagesGrid } from '../components/ImagesGrid'
import { useGetVotesQuery } from '../data/cat-api/cat.api'
import { IImagesGrid } from '../models/models'

export const LikesPage = () => {
  const { data: VotedCats, isLoading, isError } = useGetVotesQuery()

  const likesData = VotedCats?.filter((cat) => cat.value === 1)

  let data: IImagesGrid[] = []
  if (likesData) {
    data = likesData.map((cat) => ({
      id: cat.id,
      image_id: cat.image.id,
      url: cat.image.url,
    }))
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Some Error</div>
  return (
    <>
      <ImagesGrid data={data} />
    </>
  )
}
