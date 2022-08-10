import { ReactComponent as Like } from '../assets/like.svg'
import { ReactComponent as Dislike } from '../assets/dislike-30.svg'
import { ReactComponent as Favourites } from '../assets/fav-30.svg'
import { ReactComponent as Magnifier } from '../assets/search-20.svg'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
  box-sizing: border-box;
`

const SmallButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: none;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0;
  &:hover {
    background-color: #fbe0dc;
    cursor: pointer;
  }
`

const SearchInput = styled.div`
  position: relative;
  flex-grow: 2;
  box-sizing: border-box;
  input {
    border: 2px solid #fff;
    background-color: #fff;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
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
  const color = '#FF868d'

  return (
    <>
      <div>SearchField</div>
      <SearchWrapper>
        <SearchInput>
          <input />
          <SmallButton>
            <Magnifier fill={color} />
          </SmallButton>
        </SearchInput>
        <SmallButton>
          <Like fill={color} />
        </SmallButton>
        <SmallButton>
          <Favourites fill={color} />
        </SmallButton>
        <SmallButton>
          <Dislike fill={color} />
        </SmallButton>
      </SearchWrapper>
    </>
  )
}
