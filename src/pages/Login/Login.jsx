import { Link } from 'react-router-dom';
import login_img from '../../assets/images/login-img.avif'
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left w-1/2 px-5">
                        <h1 className="text-5xl font-bold py-5">Login now!</h1>
                        <img className='h-full' src={login_img} alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                                })} placeholder="password" className="input input-bordered"  />
                                {errors.password && <span className="text-red-600">Passward field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="px-3 pb-2">Are you new to KA Fitness Tracker. Please <Link className="underline font-bold" to='/register'>sign Up</Link> </p>
                        <div className="px-3 pb-2">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;