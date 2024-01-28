import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const ExploreBlog = () => {
    const blog = useLoaderData();
    // console.log(blog);
    const { image, date, author, title, content } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <h2 className="font-bold text-accent text-center py-3 text-5xl"> {title} </h2>
                <div className="card-actions gap-5 justify-center py-2">
                    <div className="flex gap-2 items-center"> <FaCalendarAlt /> {date}</div>
                    <div className="flex gap-2 items-center"><FaRegUserCircle /> {author} </div>
                </div>
                <figure><img className="" src={image} alt="Shoes" /></figure>

                <div className="card-body">
                    
                    <p className="w-3/4 mx-auto"> {content} </p>
                    
                </div>
            </div>
        </div>
    );
};

export default ExploreBlog;