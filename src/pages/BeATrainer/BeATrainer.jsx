import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const BeATrainer = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    
    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        console.log(data.image);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // now send the menu item data to the server with the image
            const trainerInfo = {
                name: data.name,
                email: data.email,
                age: parseFloat(data.age),
                image: res.data.data.display_url,
                skills: data.skills,
                timeInWeek: parseFloat(data.timeInWeek),
                timeInDay: parseFloat(data.timeInDay),           
            }
            // 
            const trainerRes = await axiosSecure.post('/appliedTrainers', trainerInfo)
            console.log(trainerRes.data);
            if (trainerRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is inserted to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    }

    const skillsList = [
        'Certified Personal Trainer (CPT)',
        'Bachelors Degree in Exercise Science or a related field',
        'First Aid and CPR Certification',
        'Specialized Certifications (e.g., Yoga, Pilates, HIIT)',
        'Nutrition Certification or Degree',
        'Experience in Fitness Instruction',
        'Excellent Interpersonal and Communication Skills',
    ]
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">

                    <div className="card w-full shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold py-6 px-6 text-center bg-primary-content font-bold text-primary">Be a Trainer!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input type="text" {...register("age", { required: true })} placeholder="Age" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Image</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} placeholder="Image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Skills</span>
                                </label>

                                {skillsList.map(skill => (
                                    <label key={skill}>
                                        <input
                                            type="checkbox"
                                            value={skill}
                                            {...register('skills')}
                                        />
                                        {skill}
                                    </label>
                                ))}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available time in a week</span>
                                </label>
                                <input type="text" {...register("timeInWeek", { required: true })} placeholder="Available time in a week" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available time in a day</span>
                                </label>
                                <input type="text" {...register("timeInDay", { required: true })} placeholder="Available time in a day" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeATrainer;