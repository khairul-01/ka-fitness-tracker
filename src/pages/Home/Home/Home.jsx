import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Featured from "../Featured/Featured";
import FeaturedClasses from "../FeaturedClass/FeaturedClasses";
import Newsletter from "../Newsletter/Newsletter";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div className="space-y-9">
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <FeaturedClasses></FeaturedClasses>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <Team></Team>
        </div>
    );
};

export default Home;