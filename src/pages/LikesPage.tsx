import { ImagesGrid } from '../components/ImagesGrid'
import { GetVotesType, useGetCatsQuery, useGetVotesQuery } from '../data/cat-api/cat.api'

export const LikesPage = () => {
  const { data, isLoading, isError } = useGetVotesQuery()

  const likesData = data?.filter((cat) => cat.value === 1 && cat)
  console.log(likesData)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Some Error</div>
  return (
    <>
      {/* <ImagesGrid data={data} /> */}
      <div>LikesPage</div>
    </>
  )
}

type PropsType = {
  id: string
  value: number
}
