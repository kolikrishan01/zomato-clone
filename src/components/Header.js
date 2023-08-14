import React from 'react'
import zomatoLogo from "../assats/zomato_logo.avif"
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="grid gap-4 grid-cols-3 grid-rows-3 max-sm:grid-cols-1 mt-6 max-sm:place-items-center  max-sm:w-full">
<div className='flex items-center justify-end pr-10 max-sm:pr-0'>
<Link to={"/"}><img src={zomatoLogo} alt="" className='h-[1.9rem] max-sm:h-[1.5rem]'/></Link>
</div>
<div className=' grid place-items-end grid-cols-2 place-content-center shadow-md rounded-md border' >
 <div className='w-full h-12 max-sm:w-full'>
 <input type="text" placeholder='Search for dish' className='w-full py-3 px-3 border-0 outline-none rounded-md'/>
 </div>
   <div className=' grid place-items-center h-12 w-12'>
   <BsSearch className=' text-red-300 font-bold'/>
   </div>
</div>
<div className='flex items-center justify-start pl-20 text-gray-400 text-lg font-light max-sm:pl-0'>
    <div>
  <span className=' mr-6 max-sm:text-base'>Log In</span>
    
    <span className=' ml-4  max-sm:text-base'>Sign In</span>
    </div>
</div>
  </div>
 
  </>
  )
}

export default Header
