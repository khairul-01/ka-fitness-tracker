import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex w-full">
            <Helmet>
                <title>KA Fitness Tracker | Dashboard</title>
            </Helmet>

            {/* Dashboard side bar */}
            <div className="w-1/4 min-h-screen px-3 py-8">
                <ul className="menu menu-vertical py-1">
                    <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/allSubscribers">All Subscribers</NavLink></li>
                    <li><NavLink to="/dashboard/allTrainers">All Trainers</NavLink></li>
                    <li><NavLink to="/dashboard/appliedTrainer">Applied Trainers</NavLink></li>
                    <li><NavLink to="/dashboard/balance">Balance</NavLink></li>

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