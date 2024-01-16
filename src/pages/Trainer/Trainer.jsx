import { BsLinkedin, BsPersonArmsUp } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { FaCalendarTimes, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";


const Trainer = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Trainer Section</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/y8RzC64/images.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Jessica Hernandez</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 8 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> Monday to Friday - 6 AM to 12 PM</div>
                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> Instagram <FaInstagram className="inline" /> | Twitter <FaTwitter className="inline" /> | LinkedIn <BsLinkedin className="inline" /></div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/yYsKmyn/Focus-Awards-Personal-Trainer-Qualifications.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Dr. Mia Rodriguez</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> Doctorate in Nutrition, Certified Health Coach</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> Nutritional Science, Holistic Wellness</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Dr. Mia Rodriguez combines her academic background in nutritional science with a practical approach to promote holistic wellness. Her blog posts and personalized nutrition guidance aim to educate and empower individuals to make informed choices that support their fitness journey and overall well-being.</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/Br40yQT/571c53-0fe791f28f164d609b57d422ec3b678d-mv2.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Mark Bennett</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> Certified Fitness Instructor, Total Body Bootcamp Specialist</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> Total Body Bootcamp, Strength Training</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Mark is a Total Body Bootcamp enthusiast with a passion for building strength and resilience. His training sessions are designed to challenge both the body and mind. Through his personal fitness journey, Mark inspires others to embrace the intensity of bootcamp workouts for transformative results.</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/4pVkpJy/stock-photo-portrait-of-a-female-personal-trainer-holding-tablet-and-smiling-at-the-camera-in-a-gym.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Sophia Chang</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> Certified Yoga Instructor, Mindfulness Practitioner</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> Yoga, Stress Reduction Techniques</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Sophia Chang brings a calm and mindful approach to fitness through her expertise in yoga. As a certified yoga instructor and mindfulness practitioner, she guides users in finding balance, reducing stress, and enhancing overall well-being. Join Sophia on a journey of self-discovery through the practice of yoga.</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/8MQqPnC/istockphoto-675179390-612x612.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Alex Williams</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> Certified Personal Trainer, Fitness Blogger</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> Beginner Fitness, Motivation</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Alex Williams understands the challenges of starting a fitness journey. As a certified personal trainer and fitness blogger, he specializes in creating beginner-friendly workouts and provides motivational insights. Follow Alex for practical tips and inspiration to kickstart your fitness routine.</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/PQT0kwS/200613-air-force-emily-thompson1.webp" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Emily Thompson</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> Certified Mindfulness Coach, Fitness Enthusiast</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> Mindful Movement, Mental Wellness</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Emily Thompson is dedicated to the transformative power of mindful movement. As a certified mindfulness coach, she guides users in integrating mindfulness into their workouts for improved mental well-being. Join Emily for a holistic approach to fitness that nourishes both the body and the mind.</p>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Trainer;