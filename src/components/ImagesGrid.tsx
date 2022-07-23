import React from 'react'
import styled from 'styled-components'
import { Cat } from '../models/models'

type PropsType = {
  data: Cat[]
}

const Grid = styled.div`
  display: grid;
  overflow: scroll;
  height: 100%;
  gap: 10px;
  grid-template-areas:
    'a b c'
    'a d d'
    'e d d';
  img {
    position: relative;
    max-width: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`

export const ImagesGrid: React.FC<PropsType> = ({ data }) => {
  return (
    <Grid>
      {data.map((item) => (
        <img key={item.id} src={item.url} />
      ))}
    </Grid>
  )
}
