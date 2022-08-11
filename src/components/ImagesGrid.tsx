import React from 'react'
import styled from 'styled-components'
import { useDeleteVoteMutation } from '../data/cat-api/cat.api'
import { VotedCat } from '../models/models'

type PropsType = {
  data: VotedCat[]
  url?: string
}

const Grid = styled.div`
  overflow: scroll;
  margin: 0;
  height: 100%;
  .normal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 10px;
    figure {
      &:nth-child(1) {
        grid-row: 1 / 3;
      }
      &:nth-child(5) {
        grid-row: 2 / 4;
        grid-column: 2 / 4;
      }
    }
  }
  .revers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 10px;
    figure {
      &:nth-child(3) {
        grid-row: 1 / 3;
      }
      &:nth-child(4) {
        grid-row: 2 / 4;
        grid-column: 1 / 3;
      }
    }
  }
  .single {
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`

const arrayDivide = (data: VotedCat[]) => {
  const size = 5
  let dataMain = []
  for (let i = 0; i < data.length; i += size) {
    dataMain.push(data.slice(i, i + size))
  }
  return dataMain
}

export const ImagesGrid: React.FC<PropsType> = ({ data, url }) => {
  const dividedCatsArray = arrayDivide(data)
  const [deleteVote] = useDeleteVoteMutation()

  return (
    <Grid>
      {dividedCatsArray[0].length === 1 ? (
        <div className='single'>
          <figure>
            <img src={dividedCatsArray[0][0].url} />
            {/* <div>
                <button onClick={() => deleteVote({ vote_id: el.id, url })}>delete</button>
              </div> */}
          </figure>
        </div>
      ) : (
        dividedCatsArray.map((item, index) => (
          <div key={item[index]?.id} className={`${index % 2 === 0 ? 'normal' : 'revers'}`}>
            {item.map((el) => (
              <figure key={el.id}>
                <img src={el.url} />
                {/* <div>
                <button onClick={() => deleteVote({ vote_id: el.id, url })}>delete</button>
              </div> */}
              </figure>
            ))}
          </div>
        ))
      )}
    </Grid>
  )
}
