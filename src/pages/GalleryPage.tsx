import { ImagesGrid } from '../components/ImagesGrid'
import { useGetCatsQuery, useUploadImageMutation } from '../data/cat-api/cat.api'

export const GalleryPage = () => {
  const { data, isLoading } = useGetCatsQuery({ limit: '10', page: '' })
  const [uploadImage] = useUploadImageMutation()

  const sendFile = (e: React.FormEvent<HTMLInputElement>) => {
    // e.preventDefault()
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0]
      const formData = new FormData()
      formData.append('file', file)
      uploadImage(formData)
    }
  }

  return (
    <>
      <div>GalleryPage</div>
      <input type='file' onChange={sendFile} />
      {isLoading ? <div>Loading...</div> : data && <ImagesGrid data={data} />}
    </>
  )
}
