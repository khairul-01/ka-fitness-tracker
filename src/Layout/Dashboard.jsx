import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data
        }
    })
    console.log(data, user?.email);
    return (
        <div className="flex w-full">
            <Helmet>
                <title>KA Fitness Tracker | Dashboard</title>
            </Helmet>

            {/* Dashboard side bar */}
            <div className="w-1/4 min-h-screen px-3 py-8">
                <ul className="menu menu-vertical py-1">
                    {
                        data?.role === 'admin' ? <>
                            <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/allSubscribers">All Subscribers</NavLink></li>
                            <li><NavLink to="/dashboard/allTrainers">All Trainers</NavLink></li>
                            <li><NavLink to="/dashboard/appliedTrainer">Applied Trainers</NavLink></li>
                            <li><NavLink to="/dashboard/balance">Balance</NavLink></li>
                        </>
                            :
                            data?.role === 'trainer' ? <>
                                <li><NavLink to="/dashboard/manageSlots">Manage Slots</NavLink></li>
                                <li><NavLink to="/dashboard/manageMembers">Manage Members</NavLink></li>
                                <li><NavLink to="/dashboard/addNewForum">Add New Forum</NavLink></li>
                                <li><NavLink to="/dashboard/addNewClass">Add New Class</NavLink></li>

                            </>
                                :
                                <>
                                    <li><NavLink to="/dashboard/activityLog">Activity Log</NavLink></li>
                                    <li><NavLink to="/dashboard/profileSettings">Profile Settings</NavLink></li>
                                    <li><NavLink to="/dashboard/recommendedClasses">Recommended Classes</NavLink></li>
                                    
                                </>
                    }

                    <div className="divider divider-neutral"></div>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
            {/* Dashboard content side  */}
            <div className="flex-1 p-8 bg-blue-300 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;