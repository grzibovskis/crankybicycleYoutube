import './carousel.css'

import IMG1 from '../../asset/Images/swiper1.JPG'
import IMG2 from '../../asset/Images/swiper2.JPG'
import IMG3 from '../../asset/Images/swiper3.JPG'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const carousel = () => {
  return (
    <div className='container-carousel'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{delay: 4000}}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='carousel-image' src={IMG1} alt="BIKE" /></SwiperSlide>
        <SwiperSlide><img className='carousel-image' src={IMG2} alt="BIKE" /></SwiperSlide>
        <SwiperSlide><img className='carousel-image' src={IMG3} alt="BIKE" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default carousel