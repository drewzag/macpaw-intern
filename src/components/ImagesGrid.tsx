import React from 'react'
import { Cat } from '../models/models'

type PropsType = {
  data: Cat[]
}

export const ImagesGrid: React.FC<PropsType> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <img key={item.id} src={item.url} />
      ))}
    </div>
  )
}
