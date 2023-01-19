import React from 'react'
import { BrowserRouter,Router, Route, Switch, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
    
     
  )
}

export default App
