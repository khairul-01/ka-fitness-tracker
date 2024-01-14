

const Featured = () => {
    return (
        <div>
            <h1 className="text-5xl text-center py-6">Our Features</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/89nwzx4/images.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Personalized Workouts!</h2>
                        <p>Tailor your fitness journey with personalized workout plans. Our platform adapts to your goals, fitness level, and preferences, ensuring a customized and effective exercise experience</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/59HFMDZ/istockphoto-1254016364-612x612.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Live Virtual Classes!</h2>
                        <p>Join live virtual classes from the comfort of your home. Interact with expert instructors, follow real-time workouts, and stay connected with a community of fitness enthusiasts.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/VCJxDt6/1585405734061.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Progress Tracking!</h2>
                        <p>Monitor your fitness progress effortlessly. Our intuitive tracking tools help you record achievements, set goals, and visualize your journey toward a healthier and stronger you.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/jgGkrfr/important-facts-about-holistic-nutrition-certifications-in-canada-1.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nutrition Guidance!</h2>
                        <p>Achieve holistic wellness with nutrition guidance. Access expert advice, meal plans, and nutritional tips to complement your fitness routine and optimize your health</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/8MQqPnC/istockphoto-675179390-612x612.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Expert Trainers!</h2>
                        <p>Train with certified experts. Our platform features experienced trainers who guide you through workouts, share fitness tips, and provide valuable insights to enhance your performance.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/PcyRTqP/istockphoto-1445245272-612x612.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Community Support!</h2>
                        <p>Connect with like-minded individuals on our platform. Share your fitness achievements, participate in challenges, and benefit from the encouragement of a supportive community.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;