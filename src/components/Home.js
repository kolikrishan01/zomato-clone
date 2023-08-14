import React from 'react'
import Carousel from "../components/Carousel"
import EasySlider from './EasySlider'
import Enjoy_Options from './Enjoy_Options'
import "../Style/loading.css"
import Cards from './Cards'
const Home = ({medium ,isLoading, apiData, handleClick}) => {
  return (
    <div>
   {
    isLoading ? (
        <>
            <div className=' flex items-center justify-center h-[55vh]'>
            <div className="spinner"></div> 
            </div>
        </>
    ): (
        <>
        <Enjoy_Options />
<Carousel medium={medium} handleClick={handleClick}/>
<div className='  w-full max-sm:pl-0 text-center max-md:text-center max-md:p-0 max-lg:p-0'>
<h1 className=' text-[1.7rem] max-sm:text-[1rem]'>Top brands for you</h1>
</div>
<EasySlider/>
<div className=' py-6 w-full max-sm:border max-sm:pl-0 text-center max-md:text-center max-md:p-0 max-lg:p-0' >
<h1 className=' text-[1.7rem] max-sm:text-[1rem]'>Delivery Restaurants in Delhi NCR</h1>
</div>

<Cards apiData={apiData} handleClick={handleClick}/>

        </>
    )
   }

   
    </div>
  )
}

export default Home
