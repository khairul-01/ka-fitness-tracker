// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

// import required modules
import { Parallax, EffectCube, Pagination, Navigation } from 'swiper/modules';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const Banner = () => {
    const axiosSecure = useAxiosSecure();
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes');
            return res.data
        }
    })
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
                {
                    classes.map(cls => <SwiperSlide key={cls._id}>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={cls.image} className="w-1/2 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold"> {cls.class_name} </h1>
                                    <p className="py-6"> {cls.description} </p>
                                    <Link to='/classes'><button className="btn btn-primary">Explore Classes</button></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;