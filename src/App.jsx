import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header  from './layout/Header.jsx'
import Footer  from './layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Support from './pages/Support.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import Subscriptions from './pages/Subscriptions.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/subscriptions' element={<Subscriptions />}></Route>
          <Route path='/support' element={<Support />}></Route>
          <Route path='/movies/:slug/:id' element={<MovieDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App