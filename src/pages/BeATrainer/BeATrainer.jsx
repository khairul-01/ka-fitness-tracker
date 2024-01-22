import { useForm } from "react-hook-form";


const BeATrainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
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
                        <h1 className="text-5xl font-bold py-6 px-6 text-center">Be a Trainer!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input type="text" placeholder="Age" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Image</span>
                                </label>
                                <input type="text" placeholder="Image url" className="input input-bordered" required />
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
                                <input type="text" placeholder="Available time in a week" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available time in a day</span>
                                </label>
                                <input type="text" placeholder="Available time in a day" className="input input-bordered" required />
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