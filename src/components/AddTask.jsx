import React from 'react'
import{ Plus,Pencil} from 'lucide-react';
import {useState} from "react";


const AddTask = () => {

    const[task,setTask]=useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();

        if(!task.trim()) return;
        onAddTask(task.trim());
        setTask("")
    }
  return (
    <>
    <section className='rounded-2xl bg-white ml-10 mr-10'>
        <div className='mb-3 ml-10 flex items-center gap-3'>
            <div className=' flex mt-2 h-8 w-8 items-center justify-center rounded-full bg-indigo-600'>
                <Plus sixe={19}
                className="text-white"/>
            </div>
            <h2 className="text-lg font-semibold">
          Add New Task
        </h2>
        </div>

        <from
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row">
            <div className='relative flex-1'>
                <Pencil 
                size={23}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

                <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task..."
            className="h-16 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
            </div>

             <button
          type="submit"
          className="flex h-16 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 px-7 font-semibold text-white shadow-md transition hover:scale-[1.01] hover:shadow-lg"
        >
          <Plus size={26} />
          Add Task
        </button>




        </from>
    </section>
      
    </>
  )
}

export default AddTask
