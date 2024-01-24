import { useState } from "react";
import { BsLinkedin, BsPersonArmsUp } from "react-icons/bs";
import { FaCalendarTimes, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoShareSocial } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const TrainerDetails = () => {
    const { trainer, image, qualifications, expertise, yearsOfExperience, availableTimeDay, availableTimeSlots, about } = useLoaderData();

    const totalSlots = availableTimeDay;
    // const [availableSlotss, setAvailableSlots] = useState(Array(totalSlots).fill(true));
    const availableSlots = Array(totalSlots).fill(true)
    

    return (
        <div>
            <div key={trainer._id} className="card bg-base-100 shadow-xl">

                <figure className="px-10 pt-10"><img className="rounded-lg" src={image} alt="Shoes" /></figure>

                <div className="card-body">
                    <div className="flex items-center">
                        <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>{trainer}</span>
                    </div>
                    <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> {yearsOfExperience}</div>
                    <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Times:</span> {availableTimeSlots}</div>

                    <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> {qualifications}</div>
                    <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> {expertise}</div>

                    <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> {about}</p>

                    <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                    <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Slots:</span>
                        <div className="space-x-3 my-3">
                            {availableSlots.map((isAvailable, index) => (
                                <div
                                    key={index}
                                    className={` btn`}
                                    
                                >
                                    
                                    <Link to='/trainerBooked'><button >Slot {index + 1}</button></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;