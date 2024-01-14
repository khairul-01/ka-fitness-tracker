import { useForm } from "react-hook-form";
import register_img from '../../assets/images/registration-img.jpeg'
import { Link } from "react-router-dom";


const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
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
                                <input type="text" {...register("photURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
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