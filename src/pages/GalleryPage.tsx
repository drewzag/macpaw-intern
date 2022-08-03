import { ImagesGrid } from '../components/ImagesGrid'
import { useGetCatsQuery } from '../data/cat-api/cat.api'

export const GalleryPage = () => {
  const { data, isLoading } = useGetCatsQuery({ limit: '10', page: '' })

  return (
    <>
      <div>GalleryPage</div>
      {isLoading ? <div>Loading...</div> : data && <ImagesGrid data={data} />}
    </>
  )
}
