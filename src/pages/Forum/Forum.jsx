import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { GrDislike, GrLike } from "react-icons/gr";
import { useState } from "react";


const Forum = () => {
    const axiosPublic = useAxiosPublic();
    const { data: posts = [] } = useQuery({
        queryKey: ['forumPosts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forumPosts')
            return res.data;
        }
    })
    const [votes, setVotes] = useState(posts);
    console.log(votes.length);

    const handleVote = (postId, isUpVote) => {
        setVotes((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  votes: isUpVote ? post.votes + 1 : Math.max(0, post.votes - 1),
                }
              : post
          )
        );
      };
    console.log(posts.length);
    
    return (
        <div>
            <h1 className="text-5xl text-center py-5">Welcome to Forum Page!</h1>
            <div className="space-y-5">
                {
                    posts.map(post => <div key={post._id} className="card w-96 mx-auto bg-base-100 shadow-xl ">

                        <div className="card-body space-y-3">
                            <h2 className="card-title">
                                {post.posterName}
                                
                            </h2>
                            <p>{post.content}</p>
                            <div className="card-actions justify-end">
                                <div onClick={() => handleVote(post._id, true)} className="btn text-base"><GrLike /> Like</div>
                                <span className="text-pink-800 font-bold text-left">{post.votes}</span>
                                <div onClick={() => handleVote(post._id, false)} className="btn text-base"><GrDislike /> Dislike</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Forum;