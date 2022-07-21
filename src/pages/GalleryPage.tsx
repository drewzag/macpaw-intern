import { ImagesGrid } from '../components/ImagesGrid'
import { useGetCatsQuery } from '../data/cat-api/cat.api'

export const GalleryPage = () => {
  const { data, isLoading } = useGetCatsQuery({ limit: '10', page: '' })

  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <div>GalleryPage</div>
      {data && <ImagesGrid data={data} />}
    </>
  )
}
