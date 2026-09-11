import React from 'react'
import {
  Check,
  ClipboardList,
  Leaf,
} from "lucide-react";

const Header = () => {
  return (
    <>
    <header className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 py-8 sm:px-10">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
            <Check size={42}
            strokeWidth={3}
            className="text-white"
            />

          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Task<span className="text-indigo-600">Manager</span></h1>

            <p className='text-gray-400 mt-2 text-sm sm:text-base'>Stay organized, get things done! 🚀</p>

          </div>
        </div>

        <div className='hidden item-center justify-center sm:flex'>
          <div className='relative rounded-3xl bg-indigo-100/70 p-6'>

          <Leaf
          size={38}
          className='absolute -left-3 -top-2 rotate-[-25deg] text-emerald-500'
          
          />

          <ClipboardList
          size={80}
          strokeWidth={1}
          className='text-indigo-500'
          
          />

          </div>
        </div>
      </div>
    </header>
      
    </>
  )
}

export default Header
