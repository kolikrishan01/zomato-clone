import React from 'react'

const SingleProduct = ({product}) => {
const {image, title, difficulty} = product
  return (
    
    <div className=' flex items-center justify-center h-[50vh] max-sm:h-[70vh] max-sm:w-full'>
    <div className='  h-[600px] w-[800px] rounded-t-lg  hover:shadow-box hover:border ease-in duration-100 b'>
     <img className='h-full w-full object-cover rounded-3xl p-2 z-50' src={image} alt="" />
  <div className=' bg-[#ef4f5f] text-white rounded-b-lg'>
          <p className='pl-3 font-medium'>{difficulty}</p>
          <p className='text-[14px] pl-3 font-[500]'>{title}</p>
          <p className='pl-3 text-[14px] font-[200]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat eligendi. Ipsa voluptatibus id commodi incidunt veritatis et vel beatae, accusamus itaque! Veritatis delectus ipsum aspernatur dignissimos illo aliquid omnis.</p>
          </div>
          </div>
      </div>



  )
}

export default SingleProduct
