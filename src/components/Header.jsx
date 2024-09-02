import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
<header className='bg-slate-200 shadow-md'>
  <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl  align-left'>
      <span className='text-slate-400'>Echo</span>
      <span className='text-slate-700'>Mines</span>
      </h1>
    </Link>

      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
      <input 
      type="text" 
      placeholder='Search...' 
       className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        {/* <FaSearch className='text=slate-600'/> */}
      </form>
      <ul  className='flex gap-6'>
        <Link to={'/Home'}>
      <li className='hidden sm:inline text-slate-500 hover:underline'>Home </li>
         </Link>
         <Link to={'/Login'}>
      <li className='hidden sm:inline text-slate-500 hover:underline'>LogIn </li>
         </Link>
         <Link to={'/UserMenu'}>
      <li className='hidden sm:inline text-slate-500 hover:underline'>UserMenu </li>
         </Link>
  </ul>
  
  </div>

</header>  )
}
