import { ImagesGrid } from '../components/ImagesGrid'
import { useGetVotesQuery } from '../data/cat-api/cat.api'
import { Cat } from '../models/models'

export const FavouritePage = () => {
  const { data: FavouritesCats, isLoading, isError } = useGetVotesQuery()

  const favouritesData = FavouritesCats?.filter((cat) => cat.value === 0)

  let data: Cat[] = []
  if (favouritesData) {
    data = favouritesData.map((cat) => ({
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
