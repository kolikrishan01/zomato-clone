

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Navigation, FreeMode } from 'swiper/modules';
import brand from './API2';
 function EasySlider({}) {
  return (
    <>
      
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
   
    
        modules={[FreeMode, Autoplay, Navigation]}
        className=" w-[74rem] max-sm:w-full max-sm:overflow-hidden px-5 max-md:w-full max-lg:p-0 max-lg:w-full"
      >
    
        {
            brand.map((item, index)=>{
                const {image, name , time} = item
                return(
                    
                    <SwiperSlide key={index} className=' py-8 w-full flex items-center justify-center' >
                    
                     <div>
                     <img src={image} alt="" className=' h-36 w-36 rounded-full shadow-box max-sm:h-14 max-sm:w-20 max-md:h-24 max-lg:h-28  max-md:w-24'/>
                     </div>
                       <div className=' text-center w-full pt-6 -ml-3'>
                       <p className=' mb-3 max-sm:text-[12px]'>{name}</p>
                       
                       <span className=' text-[13px] text-gray-500'>{time}</span>
                       </div>
                    </SwiperSlide>
                   
                )
            })
        }
      </Swiper>
    </>
  );
}
export default EasySlider;