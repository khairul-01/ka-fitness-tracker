import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { BsPersonArmsUp } from "react-icons/bs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Team = () => {
    const axiosSecure = useAxiosSecure();
    const {data: trainers=[]} = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainers');
            return res.data
        }
    })
    return (
        <div>
            <h1 className="text-5xl text-center py-6">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    trainers.map(trainer => <div key={trainer._id} className="card bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10"><img className="h-[250px] rounded-full" src={trainer.image} alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="flex items-center">
                            <BsPersonArmsUp className='inline' /><span className="text-2xl"><span className="font-bold">Name: </span>{trainer.trainer}</span>
                        </div>
                        <div className=""><GiSkills className="inline" /> <span className="font-bold">Qualifications:</span> {trainer.qualifications}</div>
                        <div className=""><GrUserExpert className="inline" /><span className="font-bold">Expertise:</span> {trainer.expertise}</div>

                        <p ><FcAbout className="inline" /> <span className="font-bold">About: </span> {trainer.about}</p>

                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default Team;