// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

// import required modules
import { EffectCube, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {

    return (
        <div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectCube, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 2
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 3
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 4
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 5
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 6
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 7
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 8
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 9
                    <img className='min-h-screen w-full' src="https://i.ibb.co/FbVrq41/8e88a8b711d6aea58af1c7268ef25b8f5c8b0f84-1140x620.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;