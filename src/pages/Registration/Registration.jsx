import { useForm } from "react-hook-form";
import register_img from '../../assets/images/registration-img.jpeg';
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from './../../hooks/useAuth';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Registration = () => {
    const axiosPublic = useAxiosPublic();
    const { signUp, userProfileUpdate } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        signUp(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                userProfileUpdate(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            photoURL: data.photoURL,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User added to the database");
                                    // reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created and added to server successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div>
            <Helmet>
                <title>KA Fitness Tracker | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2 px-5">
                        <h1 className="text-5xl font-bold py-5">Register now!</h1>

                        <img src={register_img} alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {
                                    required: true,
                                    pattern: /^\S+@\S+\.\S+$/,
                                })}
                                    placeholder="Enter your email" name="email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <span className="text-red-600">Email field is required</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-600">Please insert valid email.</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                                    maxLength: 20
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === 'maxLength' && (
                                    <p className="text-red-600">Password must be less than 20 characters</p>
                                )}
                                {errors.password?.type === 'pattern' && (
                                    <p className="text-red-600">Password must have one digit, one uppercase, one lowercase and one special character </p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="px-3 pb-2">Have you already registered. Please <Link className="underline font-bold" to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;