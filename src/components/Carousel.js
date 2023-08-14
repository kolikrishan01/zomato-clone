

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

 function Carousel({medium , handleClick}) {
  return (
    <>
      
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}

       
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation, Pagination]}
        className=" w-[74rem] bg-[#f8f8f8] mb-12 max-sm:w-full max-sm:overflow-hidden px-5 max-md:w-full max-md:px-0 max-lg:p-0 max-lg:w-full"
      >
    
        {
            medium.map((item, index)=>{
                const {image} = item
                return(
                    
                    <SwiperSlide key={index} className=' py-8 w-full' >
                    
                        <Link to={"/singleProduct"}><img src={image} alt="" className=' h-44 w-44 max-sm:h-14 max-sm:w-20 max-md:h-24  max-md:w-24 max-lg:h-28  rounded-full' onClick={()=>handleClick(item)}/></Link>
                    </SwiperSlide>
                   
                )
            })
        }
      </Swiper>
    </>
  );
}
export default Carousel;