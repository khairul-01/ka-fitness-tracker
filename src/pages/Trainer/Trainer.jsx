import { useQuery } from "@tanstack/react-query";
import { BsLinkedin, BsPersonArmsUp } from "react-icons/bs";
import { FaCalendarTimes, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { IoRocket, IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const Trainer = () => {
    const axiosSecure = useAxiosSecure();
    const {data: trainers=[]} = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainers');
            return res.data
        }
    })
    return (
        <div className="space-y-7">
            <Helmet>
                <title>KA Fitness Tracker | Trainer</title>
            </Helmet>

            <h1 className="text-5xl font-bold text-center py-5 bg-primary-content text-primary">Our Trainers</h1>

            {/* Trainer profile section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-fuchsia-200">
                {
                    trainers.map(trainer => <div key={trainer._id} className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src={trainer.image} alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>{trainer.trainer}</span>
                        </div>
                        <div className=""><FaCalendarTimes className="inline" /> <span className="font-bold">Years of Experience:</span> {trainer.yearsOfExperience}</div>
                        <div className=""><FaCheckToSlot className="inline" /> <span className="font-bold">Available Time Slots:</span> {trainer.availableTimeSlots}</div>

                        <div className=""><IoShareSocial className="inline" /> <span className="font-bold">Social Links:</span> <span className="btn btn-sm">Instagram <FaInstagram className="inline" /></span> | <span className="btn btn-sm">Twitter <FaTwitter className="inline" /></span> | <span className="btn btn-sm">LinkedIn <BsLinkedin className="inline" /></span></div>

                        <div className="card-actions justify-center">
                            <Link to={`/trainerDetails/${trainer._id}`}><button className="btn btn-primary">Know more ...</button></Link>
                        </div>
                    </div>
                </div>)
                }
                
            </div>

            {/* Be Trainer section */}
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