import { useState } from "react";


const Vote = ({ post, onVote }) => {
    const [voteCount, setVoteCount] = useState(post.votes);

    const handleVote = (type) => {
        // Simulate an API call to update the vote count on the backend
        // In a real-world scenario, you would make an API request to your backend
        // and update the database with the new vote count.

        // For simplicity, we'll just update the frontend state here.
        if (type === 'upvote') {
            setVoteCount(voteCount + 1);
        } else if (type === 'downvote') {
            setVoteCount(voteCount - 1);
        }

        // Notify the parent component about the vote
        onVote(post._id, type);
    };
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl ">

                <div className="card-body space-y-3">
                    <h2 className="card-title">
                        {post.posterName}

                    </h2>
                    <p>{post.content}</p>
                    <div className="card-actions justify-end">
                        <div onClick={() => handleVote('upvote')} className="btn text-base"><GrLike /> Fashion</div>
                        
                        <div onClick={() => handleVote('downvote')} className="btn text-base"><GrDislike /> Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vote;