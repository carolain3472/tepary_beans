import { React } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {InicioPage} from './pages/inicio'
import {FunFactsPage} from './pages/funfacts.jsx'
import {InfoPage} from './pages/info.jsx'

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element ={<InicioPage/>} />
      <Route path='/funfacts' element ={<FunFactsPage/>} />
      <Route path='/info' element ={<InfoPage/>} />
    </Routes>

  </BrowserRouter>
 
  )
}

export default App
