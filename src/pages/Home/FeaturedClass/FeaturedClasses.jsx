

const FeaturedClasses = () => {
    return (
        <div>
            <h1 className="text-5xl text-center py-5">Our Featured Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Y4sHWRj/gogoodguru-com-workout-post-header-cardio-blast.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cardio Blast!</h2>
                        <p>Ignite your metabolism and boost cardiovascular endurance with our high-energy Cardio Blast classes. Get ready to sweat, burn calories, and achieve your fitness goals.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Explore Classes</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/wSSfr9D/featured-image-workout-772x516.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HIIT Revolution!</h2>
                        <p>Experience the intensity of High-Intensity Interval Training (HIIT) with our HIIT Revolution classes. Torch calories, improve endurance, and push your limits.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Explore Classes</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/F7zbHZq/flat-hand-drawn-dance-fitness-class-illustration-23-2148867249.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dance Fit Fiesta!</h2>
                        <p>Dance your way to fitness in our Dance Fit Fiesta classes. Groove to the beat, have fun, and burn calories with our energetic dance routines.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Explore Classes</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/t49W7JR/assets-tmp-catalogue-banner-1480-840-px-69-1703284396.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Core Sculpt!</h2>
                        <p>Strengthen and define your core muscles with our Core Sculpt classes. Targeted exercises for a strong, stable core and improved posture.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Explore Classes</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Hqn2Qzy/Flow-Chi-Fusion-Untitled-Page-1-1024x374.png" alt="Shoes" className="rounded-xl h-[203px] w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Strength Fusion!</h2>
                        <p>Combine the power of strength training with dynamic movements in our Strength Fusion classes. Sculpt and tone your muscles for a stronger, leaner you.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Explore Classes</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/7bhVQWL/image.png" alt="Shoes" className="rounded-xl w-full h-[203px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Spin Revolution!</h2>
                        <p>Join the Spin Revolution for an exhilarating indoor cycling experience. Burn calories, boost stamina, and enjoy the ride towards better fitness.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Explore Classes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedClasses;