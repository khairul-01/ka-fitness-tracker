import { BsLinkedin, BsPersonArmsUp } from "react-icons/bs";
import { FaCalendarTimes, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { IoRocket, IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";


const Trainer = () => {
    return (
        <div className="space-y-7">
            <h1 className="text-5xl font-bold text-center pt-5">Our Trainers</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/y8RzC64/images.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Jessica Hernandez</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 8 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> Monday to Friday - 6 AM to 12 PM</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Know more ...</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/yYsKmyn/Focus-Awards-Personal-Trainer-Qualifications.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Dr. Mia Rodriguez</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 12 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> Tuesday and Thursday - 4 PM to 8 PM, Saturday - 10 AM to 2 PM</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Know more ...</button>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/Br40yQT/571c53-0fe791f28f164d609b57d422ec3b678d-mv2.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Mark Bennett</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 10 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> Monday, Wednesday, and Friday - 5:30 AM to 9 AM, Saturday - 8 AM to 12 PM</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Know more ...</button>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/4pVkpJy/stock-photo-portrait-of-a-female-personal-trainer-holding-tablet-and-smiling-at-the-camera-in-a-gym.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Mark Bennett</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 6 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> Monday and Wednesday - 7 AM to 11 AM, Friday - 4 PM to 8 PM</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Know more ...</button>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/8MQqPnC/istockphoto-675179390-612x612.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Mark Bennett</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 5 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> Tuesday and Thursday - 5 PM to 9 PM, Saturday - 9 AM to 1 PM</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Know more ...</button>
                        </div>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src="https://i.ibb.co/PQT0kwS/200613-air-force-emily-thompson1.webp" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>Mark Bennett</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> 7 years</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span>  Wednesday and Friday - 8 AM to 12 PM, Sunday - 3 PM to 7 PM</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Know more ...</button>
                        </div>

                    </div>
                </div>

            </div>

            <div className="rounded-lg h-[400px] bg-violet-700 text-white flex flex-col items-center justify-center gap-7">
                <h1 className="text-6xl font-bold">Be a Trainer</h1>
                <div className="flex w-2/3 justify-center items-center">

                    <Link to='/BeATrainer'>
                        <button className="flex btn ">
                            Become a Trainer
                            <IoRocket />
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Trainer;