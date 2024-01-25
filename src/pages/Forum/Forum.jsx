import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Vote from "../../components/vote/Vote";
import { Helmet } from "react-helmet-async";


const Forum = () => {
    const axiosPublic = useAxiosPublic();
    const { data: posts = [] } = useQuery({
        queryKey: ['forumPosts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forumPosts')
            return res.data;
        }
    })
   
    console.log(posts.length);
    
    return (
        <div>
            <Helmet>
                <title>KA Fitness Tracker | Forum</title>
            </Helmet>
            <h1 className="text-5xl text-center py-5">Welcome to Forum Page!</h1>
            <div className="space-y-5">
                {
                    posts.map(post => <Vote key={post._id} post={post}></Vote>)
                }
            </div>
        </div>
    );
};

export default Forum;