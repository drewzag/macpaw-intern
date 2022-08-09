import styled from 'styled-components'
import VoteTable from '../assets/vote-table.png'
import PetBreeds from '../assets/pet-breeds.png'
import ImageSearch from '../assets/images-search.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBlock = styled.div`
  /* delete background color */
  background-color: #f8f8f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`

const NavImageButton = styled.button<{ backgroundColor: string; active: boolean }>`
  position: relative;
  box-sizing: border-box;
  width: 140px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  border: 4px solid ${(props) => (props.active ? '#FBE0DC' : 'rgba(255, 255, 255, 0.6)')};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    border-color: #fff;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Navigation = () => {
  const [act, setAct] = useState(false)
  return (
    <>
      <div>Navigation</div>
      <NavBlock>
        <Link to='/voting'>
          <NavImageButton backgroundColor='#B4B7FF' active={act} onClick={() => setAct(!act)}>
            <img src={VoteTable} />
          </NavImageButton>
        </Link>
        <Link to='/breeds'>
          <NavImageButton backgroundColor='#97EAB9' active={false}>
            <img src={PetBreeds} />
          </NavImageButton>
        </Link>
        <Link to='/gallery'>
          <NavImageButton backgroundColor='#FFD280' active={false}>
            <img src={ImageSearch} />
          </NavImageButton>
        </Link>
      </NavBlock>
    </>
  )
}
