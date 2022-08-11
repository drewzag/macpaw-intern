import { ReactComponent as Like } from '../assets/like.svg'
import { ReactComponent as Dislike } from '../assets/dislike-30.svg'
import { ReactComponent as Favourites } from '../assets/fav-30.svg'
import { ReactComponent as Magnifier } from '../assets/search-20.svg'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { BasePathname } from '../models/models'

const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const SmallButton = styled.button<{ active: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => (props.active ? '#FF868E' : '#fff')};
  padding: 0;
  svg {
    fill: ${(props) => props.active && '#fff'};
  }
  &:hover {
    background-color: #fbe0dc;
    cursor: pointer;
    svg {
      fill: ${(props) => props.active && '#FF868E'};
    }
  }
`

const SearchInput = styled.div`
  position: relative;
  flex-grow: 2;
  input {
    border: 2px solid #fff;
    background-color: #fff;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    &:hover {
      border-color: #fbe0dc;
    }
    &:focus {
      outline: none;
      border-color: #ff868e;
    }
  }
  button {
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #fbe0dc;
    &:hover {
      background-color: #ff868e;
      svg {
        fill: #fff;
      }
    }
  }
`

export const SearchField = () => {
  let isLikes = false
  let isDislikes = false
  let isFavourites = false
  const activePage = useLocation()

  switch (activePage.pathname) {
    case BasePathname.LIKES:
      isLikes = true
      break
    case BasePathname.DISLIKES:
      isDislikes = true
      break
    case BasePathname.FAVOURITES:
      isFavourites = true
      break
  }

  return (
    <SearchWrapper>
      <SearchInput>
        <input />
        <SmallButton active={false}>
          <Magnifier fill='#FF868d' />
        </SmallButton>
      </SearchInput>
      <Link to='/likes'>
        <SmallButton active={isLikes}>
          <Like fill='#FF868d' />
        </SmallButton>
      </Link>
      <Link to='/dislikes'>
        <SmallButton active={isDislikes}>
          <Favourites fill='#FF868d' />
        </SmallButton>
      </Link>
      <Link to='/favourites'>
        <SmallButton active={isFavourites}>
          <Dislike fill='#FF868d' />
        </SmallButton>
      </Link>
    </SearchWrapper>
  )
}
