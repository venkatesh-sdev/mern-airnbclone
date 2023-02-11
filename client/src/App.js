import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default App