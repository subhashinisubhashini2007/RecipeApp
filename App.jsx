import React from 'react'
import SearchResults from './pages/SearchResults'
import RecipeDetails from './pages/RecipeDetails'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import About from './pages/About'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div>

      <nav>
        <h2> Recipe Finder </h2>
        <Link to='/'>Home</Link>{" "}
        <Link to='/search'> Search</Link>{" "}
        <Link to='/'>Recipes</Link>{" "}
        <Link to='/favorites'>Favorites</Link>{" "}
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}

export default App;