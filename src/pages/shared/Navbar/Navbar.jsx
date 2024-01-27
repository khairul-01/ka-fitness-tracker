import { Link, NavLink } from "react-router-dom";
import fitnessLogo from '../../../assets/images/fitness-tracker-logo.png'
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const navigationLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/trainer'>Trainer</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/community'>Community</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    const handleLogout = () => {
        logOut()
        .then(()=>{
            console.log("Successfully Logged out");
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You Logged out Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="mb-1">
            <div className="navbar bg-lime-300 text-rose-950 font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navigationLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className="w-[50px] h-[50px]" src={fitnessLogo} alt="" />
                        KA Fitness
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navigationLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogout} className="btn btn-accent">Log Out</button>
                            <div className="avatar online">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </>
                            :
                            <Link to='/login' className="btn btn-accent">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;