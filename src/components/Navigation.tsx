import styled from 'styled-components'
import VoteTable from '../assets/vote-table.png'
import PetBreeds from '../assets/pet-breeds.png'
import ImageSearch from '../assets/images-search.png'

const NavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavImageButton = styled.button<{backgroundColor: string, borderColor: string}>`
position: relative;
box-sizing: border-box;
width: 140px;
height: 200px;
border-radius: 20px;
overflow: hidden;
border: 4px solid ${props => props.borderColor};
background-color: ${props => props.backgroundColor};
img {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`

export const Navigation = () => {

  return <>
  <div>Navigation</div>
  <NavBlock>
  <div className='vote'>
  <NavImageButton backgroundColor='#B4B7FF' borderColor='rgba(255, 255, 255, 0.6)'>
  <img src={VoteTable} />
  </NavImageButton>
  </div>
  <div className='pet-breed'>
  <NavImageButton backgroundColor='#97EAB9' borderColor='rgba(255, 255, 255, 0.6)'>
  <img src={PetBreeds} />
  </NavImageButton>
  </div>
  <div className='image-search'>
  <NavImageButton backgroundColor='#FFD280' borderColor='rgba(255, 255, 255, 0.6)'>
  <img src={ImageSearch} />
  </NavImageButton>
  </div>
  </NavBlock>
  </>
}
