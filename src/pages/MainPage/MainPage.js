import React from 'react'
import Header from '../../components/Header/Header'
import Tasks from '../../components/Tasks/Tasks'
import './MainPage.css'

export default function MainPage() {
   return (
      <div className='main-page'>
         <header>
            <Header />
         </header>
         <main>
            <Tasks />
         </main>
      </div>
   )
}
