import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
//pages
import { BreedsInfoPage } from './pages/BreedsInfoPage'
import { BreedsPage } from './pages/BreedsPage'
import { BreedsSearchPage } from './pages/BreedsSearchPage'
import { DislikesPage } from './pages/DislikePage'
import { FavouritePage } from './pages/FavouritePage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { LikesPage } from './pages/LikesPage'
import { VotingPage } from './pages/VotingPage'

const Wrapper = styled.div`
  background-color: #f8f8f7;
  width: 100vw;
  box-sizing: border-box;
`

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/voting' element={<VotingPage />} />
        <Route path='/breeds' element={<BreedsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/info' element={<BreedsInfoPage />} />
        <Route path='/search' element={<BreedsSearchPage />} />
        <Route path='/likes' element={<LikesPage />} />
        <Route path='/dislikes' element={<DislikesPage />} />
        <Route path='/favourites' element={<FavouritePage />} />
      </Routes>
    </Wrapper>
  )
}

export default App
