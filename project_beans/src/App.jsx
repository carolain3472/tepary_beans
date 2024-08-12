import { React } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {InicioPage} from './pages/inicio'
import {FunFactsPage} from './pages/funfacts.jsx'

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element ={<InicioPage/>} />
      <Route path='/funfacts' element ={<FunFactsPage/>} />
    </Routes>

  </BrowserRouter>
 
  )
}

export default App
