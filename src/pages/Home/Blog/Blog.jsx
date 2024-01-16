import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Blog = () => {
    return (
        <div>
            <h1 className="text-5xl text-center py-5">Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="card bg-base-100 shadow-xl">

                    <figure><img className="h-[250px]" src="https://i.ibb.co/fG95VMh/Mindful-Moments.png" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> January 15, 2024</div>
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Emily Thompson</div>
                        </div>
                        <h2 className="card-title">Unlocking the Power of Mindful Movement</h2>
                        <p>Dive into the transformative world of mindful movement with Emily Thompsons insightful blog. Learn how incorporating mindfulness into your workouts can enhance not only physical health but also mental well-being. Discover practical tips, personal ...</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/K6PbqGp/1702590284542.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> February 2, 2024</div>
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Nutrition Expert, Dr. Mia Rodriguez</div>
                        </div>
                        <h2 className="card-title">Fueling Your Fitness: A Nutrition Guide for Success</h2>
                        <p>Dr. Mia Rodriguez breaks down the essentials of nutrition for optimal fitness results. Explore the impact of proper fueling on performance, recovery, and overall health. From pre-workout snacks to post-workout meals, this blog provides valuable insights  ...</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/vV4wZg7/bae1b2b824f4d65934a63d2297297850.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"> <FaCalendarAlt />  February 18, 2024</div>
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Mark Bennett</div>
                        </div>
                        <h2 className="card-title">Building Resilience Through Total Body Bootcamp</h2>
                        <p>Join Mark Bennett on his journey of resilience through Total Body Bootcamp classes. In this inspiring blog post, Mark shares personal challenges, victories, and the mental and physical strength gained from embracing the intensity of this dynamic workout.  ...</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/m6hqD53/download.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"> <FaCalendarAlt />  March 5, 2024</div>
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Fitness Trainer, Jessica Hernandez</div>
                        </div>
                        <h2 className="card-title">The Science of High-Intensity Interval Training (HIIT)</h2>
                        <p>Delve into the science behind HIIT with renowned fitness trainer Jessica Hernandez. Gain a deeper understanding of how HIIT impacts your metabolism, burns calories, and improves cardiovascular health. Jessica also shares practical tips for ...</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/Jqwzbd7/PSBlog-Couch-to-5-K-1024x1024.webp" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> March 20, 2024</div>
                            <div className="flex gap-2 items-center"><FaRegUserCircle /> Alex Williams</div>
                        </div>
                        <h2 className="card-title">From Couch to 5K: A Beginners Fitness Journey</h2>
                        <p>Join Alex Williams on his inspiring journey from couch potato to completing a 5K. This blog post details the challenges, triumphs, and lessons learned along the way. Perfect for beginners, Alexs story proves that anyone can embark on a fitness journey and ...</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">

                    <figure><img className="h-[250px] w-full" src="https://i.ibb.co/jfQZ9Wv/1094397-Heres-How-To-Use-Yoga-for-Stress-Reduction-1296x728-cow-pose-1296x728.webp" alt="Shoes" /></figure>

                    <div className="card-body">
                        <div className="card-actions gap-5">
                            <div className="flex gap-2 items-center"> <FaCalendarAlt /> April 8, 2024</div>
                            <div className="flex gap-2 items-center"><FaRegUserCircle />  Yoga Instructor, Sophia Chang</div>
                        </div>
                        <h2 className="card-title">Stress-Busting Yoga Poses for a Calmer You</h2>
                        <p>Unwind and find inner peace with Yoga Instructor Sophia Changs guide to stress-busting yoga poses. Discover how specific poses and breathing techniques can help alleviate stress and promote relaxation. This blog is a must-read for those seeking a ...</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;