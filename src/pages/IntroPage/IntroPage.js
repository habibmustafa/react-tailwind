import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './IntroPage.css'

export default function IntroPage() {
   return (
      <div className='intro-page'>
         <header>
            <Header />
         </header>
         <main>
            <p className='intro-text' >Manage You Task Checklist Easily</p>
            <button className='intro-button'>
               <Link to="/taskdo">Lets Start</Link>
            </button>
         </main>
      </div>
   )
}
