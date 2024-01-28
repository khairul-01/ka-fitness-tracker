import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Blog = () => {

    const axiosPublic = useAxiosPublic();
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs')
            return res.data;
        }
    })
    console.log(blogs.length);
    return (
        <div>
            <h1 className="text-5xl text-center py-5 bg-primary-content font-bold text-primary">Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-fuchsia-200">
                {
                    blogs.map(blog => <div key={blog._id} className="card bg-base-100 shadow-xl">

                        <figure><img className="h-[250px]" src={blog.image} alt="Shoes" /></figure>

                        <div className="card-body">
                            <div className="card-actions gap-5">
                                <div className="flex gap-2 items-center"> <FaCalendarAlt /> {blog.date}</div>
                                <div className="flex gap-2 items-center"><FaRegUserCircle /> {blog.author} </div>
                            </div>
                            <h2 className="card-title"> {blog.title} </h2>
                            <p> {blog.content} </p>
                            <div className="card-actions justify-end">
                                <Link to={`/exploreBlogs/${blog._id}`}>
                                    <button className="btn btn-outline btn-accent rounded-3xl">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Blog;