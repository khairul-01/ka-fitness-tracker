import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { BsPersonArmsUp } from "react-icons/bs";

const Team = () => {
    
    return (
        <div>
            <h1 className="text-5xl text-center py-6">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/8MQqPnC/istockphoto-675179390-612x612.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Alex Williams</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> Certified Personal Trainer, Fitness Blogger</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> Beginner Fitness, Motivation</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Alex Williams understands the challenges of starting a fitness journey. As a certified personal trainer and fitness blogger, he specializes in creating beginner-friendly workouts and provides motivational insights.</p>

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

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Mark is a Total Body Bootcamp enthusiast with a passion for building strength and resilience. His training sessions are designed to challenge both the body and mind.</p>

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

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> Sophia Chang brings a calm and mindful approach to fitness through her expertise in yoga. As a certified yoga instructor and mindfulness practitioner, she guides users in finding balance, reducing stress, and enhancing overall well-being.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;