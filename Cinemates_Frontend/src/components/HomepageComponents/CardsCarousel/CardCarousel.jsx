// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../Card/Card';

export default function CardCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
                <SwiperSlide><Card></Card></SwiperSlide>
            </Swiper>
        </>
    );
}
