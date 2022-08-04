import { ImagesGrid } from '../components/ImagesGrid'
import {
  useGetCatsQuery,
  useLazyGetAnalysisQuery,
  useUploadImageMutation,
} from '../data/cat-api/cat.api'

export const GalleryPage = () => {
  const { data, isLoading } = useGetCatsQuery({ limit: '10', page: '' })
  const [uploadImage] = useUploadImageMutation()
  const [getAnalysis] = useLazyGetAnalysisQuery()

  const sendFile = async (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0]
      const formData = new FormData()
      formData.append('file', file)
      formData.append('sub_id', 'drew1111')
      const resp = await getAnalysis((await uploadImage(formData).unwrap()).id)
      console.log(resp)
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
