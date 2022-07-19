import { Route, Routes } from 'react-router-dom'
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

function App() {
  return (
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
  )
}

export default App
