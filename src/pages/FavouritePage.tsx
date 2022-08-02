import { ImagesGrid } from '../components/ImagesGrid'
import { useGetFavouritesQuery } from '../data/cat-api/cat.api'
import { VotedCat } from '../models/models'

export const FavouritePage = () => {
  const { data: FavouritesCats, isLoading, isError } = useGetFavouritesQuery()

  let data: VotedCat[] = []
  if (FavouritesCats) {
    data = FavouritesCats.map((cat) => ({
      id: cat.id,
      image_id: cat.image.id,
      url: cat.image.url,
    }))
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Some Error</div>
  return (
    <>
      <div>Favourites Page</div>
      <ImagesGrid data={data} url={'favourites'} />
    </>
  )
}
