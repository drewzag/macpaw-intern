import React from 'react'
import styled from 'styled-components'
import { Cat } from '../models/models'

type PropsType = {
  data: Cat[]
}

const Grid = styled.div`
  overflow: scroll;
  margin: 0;
  .normal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`

const arrayDivide = (data: Cat[]) => {
  const size = 5
  let dataMain = []
  for (let i = 0; i < data.length; i += size) {
    dataMain.push(data.slice(i, i + size))
  }
  return dataMain
}

export const ImagesGrid: React.FC<PropsType> = ({ data }) => {
  const dividedCatsArray = arrayDivide(data)

  return (
    <Grid>
      {dividedCatsArray.map((item, index) => (
        <div key={item[index]?.id} className={`${index % 2 === 0 ? 'normal' : 'revers'}`}>
          {item.map((el) => (
            <figure key={el.id}>
              <img src={el.url} />
            </figure>
          ))}
        </div>
      ))}
    </Grid>
  )
}
