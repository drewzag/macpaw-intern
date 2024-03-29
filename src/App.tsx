import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation } from './components/Navigation'
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
  width: 100vw;
  height: 100vh;
  display: flex;
  .nav {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main {
    position: relative;
    width: 50%;
    // fix this!
    /* height: 100%; */
  }
  @media (orientation: portrait) {
    display: block;
    .nav {
      width: 100%;
      height: 40%;
    }
    .main {
      width: 100%;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <div className='nav'>
        <Navigation />
      </div>
      <div className='main'>
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
      </div>
    </Wrapper>
  )
}

export default App
