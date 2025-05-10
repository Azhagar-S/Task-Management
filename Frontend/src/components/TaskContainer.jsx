import React, { useState } from 'react'
import {addTask , deleteTask} from '../Slices/TodoSlicer'
import { useDispatch,useSelector } from 'react-redux'
const TaskContainer = () => {

    const [taskName , setTaskName] = useState('Task Name')
    const [isClicked , setClicked] = useState(false)
    const [Description , setDescription] = useState('')

   
   const [clickDescription , setClickDescription] = useState(false)

    const handleEdit = () => {
        setClicked(true);
        setTaskName('')
      };
    
      const handleChange = (e) => setTaskName(e.target.value);
    
      const handleSave = () => {
        setClicked(false);
      };
    
    
      
  return (
    <div>
        <button className='bg-green-500 px-3 py-2 rounded-lg mt-5 text-white font-bold'>Add Task</button>
        <div className='lg:w-1/2 border bg-gray-200 flex flex-col gap-5 ps-5 py-8 mt-20'>
        
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <div>
                    {isClicked && <input type='text' className='border bg-white py-1.5 ' name='taskName'value={taskName} onChange={handleChange}/>}
                    {!isClicked && <h2 className='text-3xl font-semibold'>{taskName}</h2>}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    onClick={()=>setClicked(true)}
                    class="size-6 self-center">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <button onClick={isClicked? handleSave : handleEdit}>✅</button>
                </div>

                <div className='bg-red-500 px-3 py-2 rounded-lg text-white font-semibold me-10'>Delete</div>

            </div>

            {clickDescription && <p>{Description}</p>}
            {!clickDescription && <textarea name="Description" id="" placeholder='Task Description' rows={3} className='border me-10 bg-white text-lg '
              value={Description} onChange={(e)=>setDescription(e.target.value)}
            ></textarea>}
            <div className='flex gap-15 lg:mt-5'>
            <button className='bg-amber-400 px-10 text-xl font-semibold text-white py-4 rounded-lg' onClick={()=>setClickDescription(false)}>Edit</button>
            <button className='bg-indigo-400 px-10 text-xl text-white font-semibold py-2 rounded-lg' onClick={()=>setClickDescription(true)}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default TaskContainer