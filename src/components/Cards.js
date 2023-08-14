import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({apiData, handleClick}) => {
  return (
    <div className=' grid place-items-center max-md:w-full'>
 <div className='flex items-center justify-between flex-wrap gap-5 w-[71%] max-sm:justify-center max-sm:w-full max-md:w-full max-md:justify-center max-lg:w-full max-lg:gap-0' >
  {
    apiData.map((item)=>{
        const {image, title, id, difficulty} = item
        return(
            
<div className=' flex items-center justify-center mt-5 mb-5' key={id}>
<div className='  h-[370px] w-[360px] rounded-2xl hover:shadow-box hover:border ease-in duration-100'>

  <div className=' h-[300px] w-[360px] '>
      <Link to={"/singleProduct"}><img className='h-full w-full object-cover rounded-3xl p-2 z-50' src={image} alt="" onClick={()=>handleClick(item)}/></Link>
  </div>
  <div>
      <p className='pl-3 font-medium'>{difficulty}</p>
      <p className='text-[14px] pl-3 font-[200]'>{title}</p>
  </div>
</div>
</div>


 
        )
    })
  }
  </div>
</div>
  )
}

export default Cards
