import styled from 'styled-components'
import VoteTable from '../assets/vote-table.png'
import PetBreeds from '../assets/pet-breeds.png'
import ImageSearch from '../assets/images-search.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BasePathname } from '../models/models'

const NavBlock = styled.div`
  /* delete background color */
  background-color: #f8f8f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`

const FunctionButton = styled.button<{ active: boolean; width?: string }>`
  border-radius: 10px;
  border: none;
  height: 36px;
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => (props.active ? '#ff868e' : '#fff ')};
  color: ${(props) => (props.active ? '#fff ' : '#ff868e')};
  &:hover {
    cursor: pointer;
    background-color: #fbe0dc;
    color: ${(props) => props.active && '#ff868e'};
  }
`

const NavigationImage = styled.div<{ backgroundColor: string; active: boolean }>`
  position: relative;
  box-sizing: border-box;
  width: 140px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 10px;
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
  const [isVoting, setIsVoting] = useState(false)
  const [isBreeds, setIsBreeds] = useState(false)
  const [isGallery, setIsGallery] = useState(false)
  const activePage = useLocation()

  const whichIsActive = () => {
    switch (activePage.pathname) {
      case BasePathname.VOTING:
        setIsVoting(true)
      case BasePathname.BREEDS:
        setIsBreeds(true)
      case BasePathname.GALLERY:
        setIsGallery(true)
    }
  }

  return (
    <>
      <div>Navigation</div>
      <NavBlock>
        <Link to='/voting'>
          <NavigationImage backgroundColor='#B4B7FF' active={isVoting}>
            <img src={VoteTable} />
          </NavigationImage>
          <FunctionButton active={isVoting}>VOTING</FunctionButton>
        </Link>
        <Link to='/breeds'>
          <NavigationImage backgroundColor='#97EAB9' active={isBreeds}>
            <img src={PetBreeds} />
          </NavigationImage>
          <FunctionButton active={isBreeds}>BREEDS</FunctionButton>
        </Link>
        <Link to='/gallery'>
          <NavigationImage backgroundColor='#FFD280' active={isGallery}>
            <img src={ImageSearch} />
          </NavigationImage>
          <FunctionButton active={isGallery}>GALLERY</FunctionButton>
        </Link>
      </NavBlock>
    </>
  )
}
