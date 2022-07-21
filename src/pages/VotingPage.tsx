import { useGetCatsQuery } from '../data/cat-api/cat.api'

export const VotingPage = () => {
  const { isLoading, isError, data } = useGetCatsQuery({ limit: '1' })
  console.log(data)
  return (
    <>
      <div>VotingPage</div>
      {data?.map((cat) => (
        <img key={cat.id} src={cat.url} />
      ))}
    </>
  )
}
