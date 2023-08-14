import React from 'react'
import { MdDeliveryDining, MdOutlineLocalDining } from 'react-icons/md';
import { BiSolidDrink } from 'react-icons/bi';
const Enjoy_Options = () => {
  return (
    <div className=' grid place-items-center border-b sticky top-0 bg-white pt-2 z-50 pb-4  max-md:p-0 max-md:place-items-center max-md:pb-5 max-lg:p-0 max-lg:place-items-center max-lg:pb-5' >
    <div className="grid grid-cols-1">
      <div className='flex items-center justify-center gap-16'>
        <div className='flex items-center gap-2 text-gray-400 hover:text-[#ef4f5f] max-md:w-full'>
        <div className='h-14 w-14 flex items-center justify-center rounded-full bg-[#fceec0] grayscale hover:grayscale-0 max-sm:h-8 max-sm:w-8'>
          <MdDeliveryDining className='h-8 w-8 max-sm:h-5 max-sm:w-5 text-red-500'/>
          </div>
          <span className='text-xl max-sm:text-sm'>Delivery</span>
        </div>
        <div className='flex items-center gap-2 text-gray-400 hover:text-[#ef4f5f] max-md:w-full'>
       <div className='h-14 w-14 flex items-center justify-center rounded-full bg-[#e5f3f3] grayscale hover:grayscale-0 max-sm:h-8 max-sm:w-8'>
       <MdOutlineLocalDining className='h-6 w-6 text-sky-600 max-sm:h-5 max-sm:w-5'/>
       </div>
          <span className='text-xl max-sm:text-sm'>Dining Out</span>
        </div>
        <div className='flex items-center gap-2 text-gray-400 hover:text-[#ef4f5f] max-md:w-full'>
          <div className='h-14 w-14 flex items-center justify-center rounded-full bg-[#edf4ff] grayscale hover:grayscale-0 max-sm:h-8 max-sm:w-8'>
          <BiSolidDrink className='h-6 w-6 text-green-600 max-sm:h-5 max-sm:w-5'/>
          </div>
          <span className='text-xl max-sm:text-sm '>Nightlife</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Enjoy_Options
