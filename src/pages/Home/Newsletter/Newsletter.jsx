import { IoRocket } from "react-icons/io5";

const Newsletter = () => {
    return (
        <div className="rounded-lg  bg-violet-700 text-white flex flex-col items-center justify-center p-7 ">
            <h1 className="text-6xl font-bold">Newsletter</h1>
            
            <div className="hero">
                <div className="hero-content">

                    <div className="card w-full  shadow-2xl bg-base-100 text-black">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                                
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