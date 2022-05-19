import React from 'react'
import "./TaskItem.css"
import trash from "./trash-outline.svg"

export default function Task() {
   return (
      <div className='task'>
         <img className='remove-icon' src={trash} alt="trash" />
         <input className='checkbox' type="checkbox" />
         <p className='task-text'>Morning walk</p>
      </div>
   )
}
