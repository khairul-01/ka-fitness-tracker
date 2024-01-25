import { IoRocket } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Newsletter = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        // axiosPublic.post('/users', userInfo)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             console.log("User added to the database");
        //             // reset();
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "User created and added to server successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });

        //         }
        //     })

    }
    return (
        <div className="rounded-lg  bg-violet-700 text-white flex flex-col items-center justify-center p-7 ">
            <h1 className="text-6xl font-bold">Newsletter</h1>

            <div className="hero">
                <div className="hero-content">

                    <div className="card w-full  shadow-2xl bg-base-100 text-black">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Subscribe
                                    <IoRocket /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;