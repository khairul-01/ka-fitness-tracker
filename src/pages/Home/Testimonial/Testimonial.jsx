// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {

    return (
        <div className='bg-violet-100'>
            <h1 className="text-5xl py-5 bg-primary-content font-bold text-primary text-center">Success Stories</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen ">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p>⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
                                <p className="py-6">I have never enjoyed working out as much as I do with KA Fitness Tracker. The personalized workouts and supportive community keep me motivated. It is not just a fitness app; it is a game-changer for my health and well-being!</p>
                                <h1 className="text-3xl font-bold">Sarah M</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen ">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p>⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
                                <p className="py-6">The live virtual classes are a game-changer for me. Being able to interact with instructors in real-time and connect with fellow users has transformed my fitness routine. KA Fitness Tracker makes staying active fun and engaging.</p>
                                <h1 className="text-3xl font-bold">James L</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen ">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p>⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
                                <p className="py-6">I started using KA Fitness Tracker to add variety to my workouts. The on-demand classes allow me to choose what suits my mood, and the progress tracking keeps me accountable. I have seen incredible results, both physically and mentally.</p>
                                <h1 className="text-3xl font-bold">Emily K</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen ">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p>⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
                                <p className="py-6">Total Body Bootcamp is no joke! The challenge and rewards system adds a fun element to my fitness routine. KA Fitness Tracker keeps me pushing my limits, and I appreciate the constant innovation in workout styles.</p>
                                <h1 className="text-3xl font-bold">Alex W</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen ">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p>⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
                                <p className="py-6">As a busy mom, the flexibility of on-demand classes is a lifesaver. I can squeeze in a workout whenever I have time. The community support has been incredible, making fitness a positive and achievable part of my daily routine.</p>
                                <h1 className="text-3xl font-bold">Jessica H</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen ">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <p>⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
                                <p className="py-6">The nutrition guidance on KA Fitness Tracker has been a game-changer for my overall health. The expert trainers not only push me physically but also educate me on making better lifestyle choices. Highly recommend!</p>
                                <h1 className="text-3xl font-bold">Mark B</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Testimonial;