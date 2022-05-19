import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage/IntroPage'
import MainPage from './pages/MainPage/MainPage'

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<IntroPage />} />
            <Route path='/taskdo' element={<MainPage />} />
         </Routes>
      </BrowserRouter>
   )
}
