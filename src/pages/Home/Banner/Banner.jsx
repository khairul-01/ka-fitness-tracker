// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

// import required modules
import { Parallax, EffectCube, Pagination, Navigation } from 'swiper/modules';


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
                modules={[EffectCube, Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/Y4sHWRj/gogoodguru-com-workout-post-header-cardio-blast.jpg" className="w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Cardio Blast!</h1>
                                <p className="py-6">Ignite your metabolism and boost cardiovascular endurance with our high-energy Cardio Blast classes. Get ready to sweat, burn calories, and achieve your fitness goals.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/Hqn2Qzy/Flow-Chi-Fusion-Untitled-Page-1-1024x374.png" className="w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Strength Fusion!</h1>
                                <p className="py-6">Combine the power of strength training with dynamic movements in our Strength Fusion classes. Sculpt and tone your muscles for a stronger, leaner you.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/jbBPfJz/informative-banner-energy-harmony-yoga-flat-82574-11632.jpg" className="w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Yoga Harmony!</h1>
                                <p className="py-6">Find balance and inner peace in our Yoga Harmony classes. Whether you are a beginner or an experienced yogi, join us to improve flexibility, reduce stress, and enhance overall well-being.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/wSSfr9D/featured-image-workout-772x516.png" />
                            <div>
                                <h1 className="text-5xl font-bold">HIIT Revolution!</h1>
                                <p className="py-6">Experience the intensity of High-Intensity Interval Training (HIIT) with our HIIT Revolution classes. Torch calories, improve endurance, and push your limits.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/F7zbHZq/flat-hand-drawn-dance-fitness-class-illustration-23-2148867249.jpg" />
                            <div>
                                <h1 className="text-5xl font-bold">Dance Fit Fiesta!</h1>
                                <p className="py-6"> Dance your way to fitness in our Dance Fit Fiesta classes. Groove to the beat, have fun, and burn calories with our energetic dance routines.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/t49W7JR/assets-tmp-catalogue-banner-1480-840-px-69-1703284396.png" className="w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Core Sculpt!</h1>
                                <p className="py-6">Strengthen and define your core muscles with our Core Sculpt classes. Targeted exercises for a strong, stable core and improved posture.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/PDxzSHd/e2552b9195b4eb1c858539d75d81eb04.jpg" />
                            <div>
                                <h1 className="text-5xl font-bold">Mindful Meditation!</h1>
                                <p className="py-6">Achieve mental clarity and relaxation in our Mindful Meditation classes. Unwind, reduce stress, and cultivate mindfulness for a healthier mind and body.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img className='w-1/2 h-full' src="https://i.ibb.co/7bhVQWL/image.png" />
                            <div className='w-1/2'>
                                <h1 className="text-5xl font-bold">Spin Revolution!</h1>
                                <p className="py-6">Join the Spin Revolution for an exhilarating indoor cycling experience. Burn calories, boost stamina, and enjoy the ride towards better fitness.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/C05gCrs/small-total-body-bootcamp-cover.jpg" />
                            <div>
                                <h1 className="text-5xl font-bold">Total Body Bootcamp!</h1>
                                <p className="py-6">Challenge yourself with our Total Body Bootcamp classes. A full-body workout designed to improve strength, endurance, and overall fitness.</p>
                                <button className="btn btn-primary">Explore Classes</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;