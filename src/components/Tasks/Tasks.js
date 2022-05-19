import React from 'react'
import './Tasks.css'
import Task from '../TaskItem/TaskItem'

export default function Tasks() {
   return (
      <div className='taskdo-page'>
         <div className="container">
            <div className="add-task">
               <label>
                  <button>+</button>
                  <p>Add New Task</p>
               </label>
               {/* <input type="text" /> */}
            </div>
            <div className="tasks">
               <Task />
               <Task />
               <Task />
            </div>
         </div>
      </div>
   )
}
