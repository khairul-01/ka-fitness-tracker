import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import WeeklySchedule from "./WeeklySchedule";
import './schedule.css'
import { Helmet } from "react-helmet-async";


const Classes = () => {
    const axiosSecure = useAxiosSecure();
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes');
            return res.data
        }
    })

    const weeklySchedule = {
        "Monday": [
            { time: "10:00 AM", activity: "Cardio Blast" },
            { time: "2:00 PM", activity: "Strength Fusion" },
            { time: "2:00 PM", activity: "Strength Fusion" },
            // Add more activities as needed
        ],
        "Tuesday": [
            // Tuesday activities
            { time: "10:00 AM", activity: "Cardio Blast" },
            { time: "2:00 PM", activity: "Strength Fusion" },
        ],
        "Wednesday": [
            // Tuesday activities
            { time: "10:00 AM", activity: "Cardio Blast" },
            { time: "2:00 PM", activity: "Strength Fusion" },
        ],
        // Repeat for other days of the week
    };

    return (
        <div>
            <Helmet>
                <title>KA Fitness Tracker | Classes</title>
            </Helmet>
            <h2 className="text-4xl text-center py-7 bg-primary-content font-bold text-primary">Weekly Schedule and Activities</h2>
            <WeeklySchedule schedule={weeklySchedule}></WeeklySchedule>
            <div className="mt-5">
                <h1 className="text-4xl text-center py-7 bg-primary-content font-bold text-primary">All Classes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-fuchsia-200'>
                    {
                        classes.map(silver => <div key={silver._id} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={silver.image} alt="Shoes" className="rounded-xl h-64" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"> {silver.class_name} </h2>
                                <p> {silver.description} </p>

                            </div>
                        </div>)
                    }
                </div>
                <div className='p-5'>
                    <button className="btn btn-primary w-full">Join Now</button>
                </div>
            </div>
        </div >
    );
};

export default Classes;